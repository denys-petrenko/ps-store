import styles from "./HeaderActions.module.scss";
import profile from "../../../../assets/header/profile.svg";
import favorites from "../../../../assets/header/favorites.svg";
import cart from "../../../../assets/header/cart.svg";

import i18next from "i18next";
import { LOCALS } from "../../../../i18n/constants";

const HeaderActions = () => {
    const changeLang = (lang) => {
        i18next.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    }

    return (
        <div className={styles["header-actions"]}>
            <div className={styles["header-icons"]}>
                <a href="" className={styles["header-icon"]}>
                    <img src={profile} alt="Profile" />
                </a>
                <a href="" className={styles["header-icon"]}>
                    <img src={favorites} alt="Favorites" />
                </a>
                <a href="" className={styles["header-icon"]}>
                    <img src={cart} alt="Cart" />
                </a>
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