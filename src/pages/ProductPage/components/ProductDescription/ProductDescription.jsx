import styles from "./ProductDescription.module.scss";
import { useTranslation } from "react-i18next";
import StickyPurchaseCard from "../StickyPurchaseCard/StickyPurchaseCard";

const ProductDescription = ({ product, isStickyMode }) => {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    return (
        <section id="description" className={`observe-section ${styles.descriptionSection}`}>
            <div className={styles.content}>
                <h2 className={styles.title}>{t("product_card.description")} {product.name}</h2>
                <div>
                    {product.description.map((el, i) => (
                        el.type === "paragraph"
                            ? <p key={`${product.id}-${i}p`} className={styles.description}>{el.text[lang]}</p>
                            : el.type === "image"
                                ? <img key={`${product.id}-${i}img`} src={el.src} alt="image" className={styles.img} />
                                : null

                    ))}
                </div>
            </div>

            <StickyPurchaseCard product={product} isStickyMode={isStickyMode} />
        </section>
    )
}

export default ProductDescription;