import catalogBtn from "../../../assets/header/header-catalog-btn.svg";
import searchBtn from "../../../assets/header/search.svg";
import profile from "../../../assets/header/profile.svg";
import favorites from "../../../assets/header/favorites.svg";
import cart from "../../../assets/header/cart.svg";
import styles from "./HeaderBottom.module.scss";
import { useEffect, useRef, useState } from "react";

const HeaderBottom = () => {
    const [showContent, setShowContent] = useState(false);
    const menuRef = useRef(null);

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
                    <img className={showContent ? styles["dropdown-btn-img-active"] : styles["dropdown-btn-img"]} src={catalogBtn} alt="Catalog button" />
                    Каталог товарів
                </button>
                <ul className={`${styles["content-menu"]} ${showContent ? styles.active : ""}`}>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Apple</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Гаджети та аксесуари</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Електронні книги</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Конструктори LEGO</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Мобільний зв'язок</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Годинник</a></li>
                    <li className={styles["content-menu-item"]}><a href="#" className={styles["content-menu-item-link"]}>Спорт та туризм</a></li>
                </ul>
            </nav>
            <div className={styles["header-searcher"]}>
                <input type="text" name="search" placeholder="Search" className={styles["search-input"]} />
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
                    <button className={styles["language-select"]}>
                        UA
                    </button>
                    <button className={styles["language-select"]}>
                        EN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;