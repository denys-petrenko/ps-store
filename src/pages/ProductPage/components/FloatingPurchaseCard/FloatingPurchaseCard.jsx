import styles from "./FloatingPurchaseCard.module.scss";
import BuyButton from "../PurchaseCard/BuyButton/BuyButton";
import PriceBlock from "../PurchaseCard/PriceBlock/PriceBlock";

const FloatingPurchaseCard = ({ product, showFloatingCard }) => {

    return (
        <div className={`${styles.floatPurchaseCard} ${showFloatingCard ? styles.active : ""}`}>
            <PriceBlock product={product} showFloatingCard={showFloatingCard}/>
            <BuyButton showFloatingCard={showFloatingCard}/>
        </div>
    )
}

export default FloatingPurchaseCard;