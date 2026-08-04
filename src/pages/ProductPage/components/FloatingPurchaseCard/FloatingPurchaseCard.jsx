import styles from "./FloatingPurchaseCard.module.scss";
import BuyButton from "../PurchaseCard/BuyButton/BuyButton";
import PriceBlock from "../PurchaseCard/PriceBlock/PriceBlock";

const FloatingPurchaseCard = ({ product, showFloatingCard, isStickyMode }) => {

    return (
        <div className={`${styles.floatPurchaseCard} ${showFloatingCard ? styles.active : ""}`}>
            <PriceBlock product={product} isStickyMode={isStickyMode} />
            <BuyButton product={product} isStickyMode={isStickyMode} />
        </div>
    )
}

export default FloatingPurchaseCard;