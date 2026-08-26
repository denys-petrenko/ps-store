import styles from "./HeaderActions.module.scss";
import iconProfile from "../../../../assets/header/profile.svg";
import iconFavorites from "../../../../assets/header/favorites.svg";
import iconCart from "../../../../assets/header/cart.svg";
import i18next from "i18next";
import { LOCALS } from "../../../../i18n/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const HeaderActions = () => {
    const cart = useSelector(state => state.cart);
    const favoritesCart = useSelector(state => state.favorites);
    const changeLang = (lang) => {
        i18next.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    }

    return (
        <div className={styles["header-actions"]}>
            <div className={styles.headerIcons}>
                <a href="" className={styles.headerIcon}>
                    <img src={iconProfile} alt="Profile" />
                </a>
                <a href="" className={styles.headerIcon}>
                    <img src={iconFavorites} alt="Favorites" />
                    <span className={`${styles.iconCounter} ${favoritesCart.items.length > 0 ? styles.active : ""}`} >
                        {favoritesCart.items.length}
                    </span>
                </a>
                <Link to="/ps-store/cart" className={styles.headerIcon}>
                    <img src={iconCart} alt="Cart" />
                    <span className={`${styles.iconCounter} ${cart.items.length > 0 ? styles.active : ""}`} >
                        {cart.items.length}
                    </span>
                </Link>
            </div>
            <div className={styles["language-switcher"]}>
                <button
                    className={styles["language-select"]}
                    onClick={() => changeLang(LOCALS.UK)}
                    disabled={i18next.language === LOCALS.UK}
                >
                    UK
                </button>
                <button
                    className={styles["language-select"]}
                    onClick={() => changeLang(LOCALS.EN)}
                    disabled={i18next.language === LOCALS.EN}
                >
                    EN
                </button>
            </div>
        </div>
    )
}

export default HeaderActions;