import styles from "./FavoritePage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CategoryCard from "../SubCategoryPage/categoryCard/categoryCard";
import { addToCart, openCartModal } from "../../store/slices/cartSlice";
import { clearFavorites } from "../../store/slices/favoritesSlice";
import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";
import { useTranslation } from "react-i18next";

const FavoritePage = () => {
    const { items } = useSelector(state => state.favorites);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const addProductsToCart = () => {
        if (!items.length) return;
        dispatch(openCartModal());
        items.forEach(item => dispatch(addToCart(item)));
    }

    const handleClearFavorites = () => {
        if (!items.length) return;
        dispatch(clearFavorites());
    }


    return (
        <section className={styles.favoritePage}>
            <h1 className={styles.title}>{t("favorites.title")}</h1>
            <div className={styles.actions}>
                <button
                    className={`${styles.btn} ${styles.buyBtn}`}
                    onClick={addProductsToCart}
                >
                    {t("favorites.buy_btn")}
                </button>
                <button
                    className={`${styles.btn} ${styles.clearBtn}`}
                    onClick={handleClearFavorites}
                >
                    {t("favorites.clear_btn")}
                </button>
            </div>
            <div className={styles.favoriteCards}>
                {items.map(item => <CategoryCard item={item} key={item.id} />)}
            </div>

            <SubscriptionForm />
        </section>
    )
}

export default FavoritePage;