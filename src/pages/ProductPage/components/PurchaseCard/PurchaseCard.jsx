import styles from "./PurchaseCard.module.scss";
import { HeartPlus, HeartX } from "lucide-react";
import Loader from "../../../../components/ui/Loader";
import BuyButton from "./BuyButton/BuyButton";
import PriceBlock from "./PriceBlock/PriceBlock";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../../store/slices/favoritesSlice";
import { useSelector } from "react-redux";

const PurchaseCard = ({ purchaseRef, product }) => {
    const dispatch = useDispatch();

    const addProductToFavorites = (item) => {
        dispatch(addToFavorites(item));
    }

    const removeProductFromFavorite = (item) => {
        dispatch(removeFromFavorites(item));
    }

    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.items.some(item => item.id === product.id);

    if (!product) {
        return <Loader />
    }

    return (
        <div ref={purchaseRef} className={styles.purchaseSection}>
            <PriceBlock product={product} />
            {
                isFavorite
                    ? <HeartX
                        className={styles.heartX}
                        size={24}
                        onClick={() => removeProductFromFavorite(product)}
                    />
                    : <HeartPlus
                        className={styles.heartPlus}
                        size={24}
                        onClick={() => addProductToFavorites(product)}
                    />
            }
            <BuyButton product={product} />
        </div>
    )
}

export default PurchaseCard;