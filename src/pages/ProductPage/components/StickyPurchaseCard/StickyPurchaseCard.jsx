import styles from "./StickyPurchaseCard.module.scss";
import { useTranslation } from "react-i18next";
import BuyButton from "../PurchaseCard/BuyButton/BuyButton";
import PriceBlock from "../PurchaseCard/PriceBlock/PriceBlock";

const StickyPurchaseCard = ({product, isStickyMode}) => {
    const { t } = useTranslation();

    return (
        <aside className={styles.stickyPurchaseSection}>
            <div className={styles.card}>
                <img src={product.images[0]} alt={product.name} className={styles.img} />
                <p className={styles.code}>{t("product_card.product_code")}: {product.code}</p>
                <h3 className={styles.title}>{product.name}</h3>
                <PriceBlock product={product} isStickyMode={isStickyMode} />
                <BuyButton />
            </div>
        </aside>
    )
}

export default StickyPurchaseCard;