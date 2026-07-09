import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BestOffers from "../Home/sections/Main/BestOffers/BestOffers";
import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";
import { useTranslation } from "react-i18next";
import { useState, useEffect, Fragment, useRef } from "react";
import { getProduct } from "../../api/productApi";

import { getDocs } from "firebase/firestore";
import { productTemplateCol } from "../../api/productsApi";

import Slider from "../Home/sections/Slider/Slider";

import { BadgeCheck, BadgeX, HeartPlus, HeartX } from "lucide-react";

import PurchaseCard from "./components/PurchaseCard/PurchaseCard";
import FloatingPurchaseCard from "./components/FloatingPurchaseCard/FloatingPurchaseCard";

const ProductPage = () => {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("about");
    const { i18n, t } = useTranslation();
    const lang = i18n.language;




    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await getProduct(productSlug);
                setProduct(data);
            } catch (error) {

            }
        }

        loadProduct();
    }, [])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }




    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        const getTemplate = async () => {
            const snapshot = await getDocs(productTemplateCol);
            const templates = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setTemplates(templates);
        }
        getTemplate();
    }, [])


    const [productData, setProductData] = useState(null);
    const mergeProductWithTemplate = (product, templates) => {
        const temp = templates.find(item => item.id === product?.templateId);

        if (!temp) return null;

        const result = structuredClone(temp);
        result.id = product.id;

        for (const key in result?.specs) {
            const group = result.specs[key]

            group.attributes.forEach(item => {
                if (item.source === "product") {
                    item.value = product.specs?.[item.key] ?? null;
                }
            })
        }

        for (const key in product) {
            if (!(key in result)) result[key] = product[key];
        }
        return result;
    }

    useEffect(() => {
        setProductData(mergeProductWithTemplate(product, templates))
    }, [product, templates])
    // console.log(productData);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, {
            rootMargin: "-80px 0px -60% 0px",
            threshold: 0
        });

        const sections = document.querySelectorAll(`.${styles.observeSection}`);
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();

    }, [productData]);



    const purchaseRef = useRef(null);
    const titleRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const [purchaseVisible, setPurchaseVisible] = useState(false);

    const showFloatingCard = !titleVisible && !purchaseVisible;
    useEffect(() => {
        if (!purchaseRef.current || !titleRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === titleRef.current) setTitleVisible(entry.isIntersecting);
                if (entry.target === purchaseRef.current) setPurchaseVisible(entry.isIntersecting);
            })

        });

        observer.observe(purchaseRef.current);
        observer.observe(titleRef.current);

        return () => observer.disconnect();
    }, [productData]);


    const isAvailable = productData?.stock > 0;

    if (!productData) {
        return <Slider />
    }

    return (
        <section className={styles.productPage}>
            <Breadcrumbs />
            <div className={styles.navigation}>
                <div className={styles.navigationWrapper}>
                    <button
                        className={`${styles.navigationBtn} ${activeTab === "about" ? styles.active : ""}`}
                        onClick={() => scrollToSection("about")}
                    >
                        {t("product_card.navigation.about")}
                    </button>
                    <button
                        className={`${styles.navigationBtn} ${activeTab === "specs" ? styles.active : ""}`}
                        onClick={() => scrollToSection("specs")}
                    >
                        {t("product_card.navigation.specs")}
                    </button>
                    <button
                        className={`${styles.navigationBtn} ${activeTab === "description" ? styles.active : ""}`}
                        onClick={() => scrollToSection("description")}
                    >
                        {t("product_card.navigation.description")}
                    </button>
                </div>

            </div>



            <section className={styles.topLayout}>
                <h1 ref={titleRef} id="about" className={`${styles.observeSection} ${styles.title}`}>{productData.name}</h1>

                <div className={styles.slider}>
                    <div className={styles.sliderWrapper}>
                        <Slider variant={"product"} autoplay={false} data={productData?.images} />
                    </div>
                </div>


                <div className={styles.rightColumn}>
                    <div className={styles.productMeta}>
                        <span className={styles.productCode}>{t("product_card.product_code")}: {productData.code}</span>
                        <span className={styles.inStock}>
                            {isAvailable
                                ? <>
                                    <BadgeCheck className={styles.badgeCheck} size={20} />
                                    {t("product_card.stock.true")}
                                </>
                                : <>
                                    <BadgeX className={styles.badgeX} size={20} />
                                    {t("product_card.stock.false")}
                                </>
                            }
                        </span>
                    </div>

                    <PurchaseCard ref={purchaseRef} product={productData} />

                    <section id="specs" className={`${styles.observeSection} ${styles.specsSection}`}>
                        <h2 className={styles.titleDescription}>{t("product_card.parameters")}</h2>
                        <div className={styles.sectionsBox}>
                            {Object.entries(productData.specs).map(([key, section]) => (
                                <div key={key} className={styles.section}>
                                    <h3 className={styles.sectionTitle}>{section.title[lang]}</h3>
                                    <dl className={styles.sectionAttributes}>
                                        {section.attributes.map(attr => (
                                            <Fragment key={attr.key}>
                                                <dt className={styles.attributeTitle}>{typeof attr.title === "object" ? attr.title[lang] : attr.title}</dt>
                                                <dd className={styles.attributeValue}>{typeof attr.value === "object" ? attr.value[lang] : attr.value}</dd>
                                            </Fragment>
                                        ))}
                                    </dl>
                                </div>
                            ))}
                        </div>

                        {/* <button className={styles.showMoreBtn}>Більше характеристик</button> */}
                    </section>
                </div>
            </section>

            <BestOffers />

            <section id="description" className={`${styles.observeSection} ${styles.descriptionSection}`}>
                <h2 className={styles.titleDescription}>{t("product_card.description")} {productData.name}</h2>
                <div>
                    {productData.description.map((el, i) => (
                        el.type === "paragraph"
                            ? <p key={`${productData.id}-${i}p`} className={styles.description}>{el.text[lang]}</p>
                            : el.type === "image"
                                ? <img key={`${productData.id}-${i}img`} src={el.src} alt="image" className={styles.descriptionImg} />
                                : null

                    ))}
                </div>
            </section>

            <SubscriptionForm />
            {/* <div className={`${styles.floatPurchaseCard} ${showFloatingCard ? styles.active : ""}`}>
                <PurchaseCard product={productData} />
            </div> */}
            <FloatingPurchaseCard product={productData} showFloatingCard={showFloatingCard}/>
        </section >
    )
}

export default ProductPage;