import styles from "./PurchaseCard.module.scss";
import Loader from "../../../../components/ui/Loader";
import BuyButton from "./BuyButton/BuyButton";
import PriceBlock from "./PriceBlock/PriceBlock";
import FavoriteBtn from "./FavoriteBtn/FavoriteBtn";


const PurchaseCard = ({ purchaseRef, product }) => {

    if (!product) {
        return <Loader />
    }

    return (
        <div ref={purchaseRef} className={styles.purchaseSection}>
            <PriceBlock product={product} />
            <FavoriteBtn product={product} />
            <BuyButton product={product} />
        </div>
    )
}

export default PurchaseCard;