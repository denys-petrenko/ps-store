import styles from "./PurchaseCard.module.scss";
import { HeartPlus, HeartX } from "lucide-react";
import Loader from "../../../../components/ui/Loader";
import BuyButton from "./BuyButton/BuyButton";
import PriceBlock from "./PriceBlock/PriceBlock";

const PurchaseCard = ({ purchaseRef, product }) => {

    if (!product) {
        return <Loader />
    }

    return (
        <div ref={purchaseRef} className={styles.purchaseSection}>
            <PriceBlock product={product} />
            <HeartPlus className={styles.heartPlus} size={24} />
            <BuyButton />
        </div>
    )
}

export default PurchaseCard;