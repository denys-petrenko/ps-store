import catalogBtn from "../../../assets/header/header-catalog-btn.svg";
import searchBtn from "../../../assets/header/search.svg";
import profile from "../../../assets/header/profile.svg";
import favorites from "../../../assets/header/favorites.svg";
import cart from "../../../assets/header/cart.svg";
import styles from "./HeaderBottom.module.scss";
import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { LOCALS } from "../../../i18n/constants";

const HeaderBottom = () => {
    const [showContent, setShowContent] = useState(false);
    const menuRef = useRef(null);
    const { t } = useTranslation();
    const dropdownMenu = t("header.dropdown.menu", { returnObjects: true });

    const changeLang = (lang) => {
        i18next.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    }

    useEffect(() => {
        const handleContentBtn = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowContent(false);
            }
        }

        document.addEventListener("click", handleContentBtn);
        return () => document.removeEventListener("click", handleContentBtn);
    }, [])

    return (
        <div className={styles["header-bottom"]}>
            <nav ref={menuRef} className={styles["dropdown-menu"]}>
                <button className={
                    showContent
                        ? styles["dropdown-btn-active"]
                        : styles["dropdown-btn"]}
                    onClick={() => setShowContent(prev => !prev)}>
                    <img className={showContent
                        ? styles["dropdown-btn-img-active"]
                        : styles["dropdown-btn-img"]}
                        src={catalogBtn} alt="Catalog button"
                    />
                    {t("header.dropdown.button")}
                </button>
                <ul className={`${styles["content-menu"]} ${showContent ? styles.active : ""}`}>
                    {
                        dropdownMenu
                            .map(item => (
                                <li key={item.toLowerCase()} className={styles["content-menu-item"]}>
                                    <a href="#" className={styles["content-menu-item-link"]}>
                                        {item}
                                    </a>
                                </li>
                            ))
                    }
                </ul>
            </nav>
            <div className={styles["header-searcher"]}>
                <input type="text" name="search" placeholder={t("header.placeholder")} className={styles["search-input"]} />
                <button className={styles["header-searcher-btn"]}>
                    <img src={searchBtn} alt="" className={styles["search-logo"]} />
                </button>
            </div>
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
        </div>
    )
}

export default HeaderBottom;