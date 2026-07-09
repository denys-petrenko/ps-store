import styles from "./PurchaseCard.module.scss";
import { HeartPlus, HeartX } from "lucide-react";
import Slider from "../../../Home/sections/Slider/Slider";
import BuyButton from "./BuyButton/BuyButton";
import PriceBlock from "./PriceBlock/PriceBlock";

const PurchaseCard = ({ product, ref }) => {
    if (!product) {
        return <Slider />
    }

    return (
        <div ref={ref} className={styles.purchaseSection}>
            <PriceBlock product={product} />
            <HeartPlus className={styles.heartPlus} size={24} />
            <BuyButton />
        </div>
    )
}

export default PurchaseCard;