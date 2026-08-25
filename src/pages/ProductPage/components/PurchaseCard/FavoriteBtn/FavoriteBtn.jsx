import styles from "./FavoriteBtn.module.scss";
import { useSelector } from "react-redux";
import Loader from "../../../../../components/ui/Loader";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../../../store/slices/favoritesSlice";
import { HeartPlus, HeartX } from "lucide-react";



const FavoriteBtn = ({ product, variant = "" }) => {
    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.items.some(item => item.id === product.id);
    const dispatch = useDispatch();

    const addProductToFavorites = (item) => {
        dispatch(addToFavorites(item));
    }

    const removeProductFromFavorite = (item) => {
        dispatch(removeFromFavorites(item));
    }

    if (!product) {
        return <Loader />
    }

    return (
        <button className={`${styles.favoriteBtn} ${styles[variant]}`}>
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
        </button>
    )
}

export default FavoriteBtn;