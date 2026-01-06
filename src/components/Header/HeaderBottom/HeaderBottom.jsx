import catalogBtn from "../../../assets/header/header-catalog-btn.svg";
import searchBtn from "../../../assets/header/search.svg";
import profile from "../../../assets/header/profile.svg";
import favorites from "../../../assets/header/favorites.svg";
import cart from "../../../assets/header/cart.svg";
import styles from "./HeaderBottom.module.scss";

const HeaderBottom = () => {
    return (
        <div className={styles["header-bottom"]}>
            <nav className={styles["dropdown-menu"]}>
                <button className={styles["btn-dropdown-catalog"]}>
                    <img src={catalogBtn} alt="" />
                    Catalog
                </button>
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
                        <img src={profile} alt="" />
                    </a>
                    <a href="" className={styles["header-icon"]}>
                        <img src={favorites} alt="" />
                    </a>
                    <a href="" className={styles["header-icon"]}>
                        <img src={cart} alt="" />
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