import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { useState, useEffect, Fragment } from "react";

import { getProduct } from "../../api/productApi";

import { getDocs } from "firebase/firestore";
import { productTemplateCol } from "../../api/productsApi";

import Slider from "../Home/sections/Slider/Slider";
import basket from "../../assets/card/shopping-cart.svg";

import {BadgeCheck, BadgeX } from "lucide-react";

import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";

const ProductPage = () => {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("about");

    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();



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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.6
            }
        );

        document.querySelectorAll(`.${styles.observeSection}`).forEach(section => observer.observe(section))

        return () => observer.disconnect();
    })






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
    console.log(productData);

    const hasDiscount = productData?.discount > 0;
    const finalPrice = productData?.price - productData?.discount;
    const isAvailable = productData?.stock > 0;

    if (!productData) {
        return <Slider />
    }

    return (
        <section className={styles.productPage}>
            <Breadcrumbs />
            <div className={styles.navigation}>
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

            <section id="about" className={styles.observeSection}>
                <h1 className={styles.title}>{productData.name}</h1>
                <div className={styles.productMeta}>
                    <span className={styles.productCode}>{t("product_card.product_code")}: {productData.code}</span>
                    <span className={styles.inStock}>
                        {isAvailable
                        ? <>
                        <BadgeCheck className={styles.badgeCheck} size={20}/>
                        {t("product_card.stock.true")}
                        </>
                        : <>
                        <BadgeX className={styles.badgeX} size={20}/>
                        {t("product_card.stock.false")}
                        </>
                        }
                    </span>
                </div>
                <Slider variant={"product"} autoplay={false} data={productData?.images} />
            </section>




            <section className={styles.purchaseSection}>
                <div className={styles.priceBox}>
                    {hasDiscount && (
                        <div className={styles.discountBox}>
                            <del className={styles.oldPrice}>
                                {productData.price} ₴
                            </del>
                            <span className={styles.discount}>
                                -{productData.discount} ₴
                            </span>
                        </div>
                    )}

                    <span className={styles.price}>
                        {hasDiscount ? finalPrice : productData.price} ₴
                    </span>
                </div>

                <button className={styles.buyButton}>
                    <img src={basket} alt="Basket" />
                    {t("product_card.buy-button")}
                </button>
            </section>



            <section id="specs" className={styles.observeSection}>
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



            <section id="description" className={styles.observeSection}>
                <h2 className={styles.titleDescription}>{t("product_card.description")} {productData.name}</h2>
                <p className={styles.description}>{productData.description[lang]}</p>
            </section>

            <SubscriptionForm />
        </section >
    )
}

export default ProductPage;