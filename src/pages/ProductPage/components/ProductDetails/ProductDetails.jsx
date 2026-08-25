import styles from "./ProductDetails.module.scss";
import { useTranslation } from "react-i18next";
import { BadgeCheck, BadgeX } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Slider from "../../../Home/sections/Slider/Slider";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import ProductSpecs from "./ProductSpecs/ProductSpecs";


const ProductDetails = ({ product, setShowFloatingCard }) => {
    const { t } = useTranslation();
    const isAvailable = product?.stock > 0;

    const titleRef = useRef(null);
    const purchaseRef = useRef(null);

    const [titleVisible, setTitleVisible] = useState(false);
    const [purchaseVisible, setPurchaseVisible] = useState(false);
    const isStickyMode = !titleVisible && !purchaseVisible;

    useEffect(() => {
        setShowFloatingCard(isStickyMode);
    }, [isStickyMode])


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
    }, [product]);

    const slides = product.images.map(image => (
        {
            id: product.id,
            image: image,
            name: product.name
        }
    ))


    return (
        <section className={styles.productDetails}>
            <h1
                ref={titleRef}
                id="about"
                className={`observe-section ${styles.title}`}
            >
                {product.name}
            </h1>

            <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    <Slider variant="product" autoplay={false} data={slides} />
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.productMeta}>
                    <span className={styles.productCode}>{t("product_card.product_code")}: {product.code}</span>
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

                <PurchaseCard purchaseRef={purchaseRef} product={product} />
                <ProductSpecs product={product} />
            </div>
        </section>
    )
}

export default ProductDetails;