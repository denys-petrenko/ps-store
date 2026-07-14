import styles from "./FloatingPurchaseCard.module.scss";
import BuyButton from "../PurchaseCard/BuyButton/BuyButton";
import PriceBlock from "../PurchaseCard/PriceBlock/PriceBlock";

const FloatingPurchaseCard = ({ product, isStickyMode }) => {
    

    return (
        <div className={`${styles.floatPurchaseCard} ${isStickyMode ? styles.active : ""}`}>
            <PriceBlock product={product} isStickyMode={isStickyMode}/>
            <BuyButton isStickyMode={isStickyMode}/>
        </div>
    )
}

export default FloatingPurchaseCard;