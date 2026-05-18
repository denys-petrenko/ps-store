import styles from "./HeaderSearch.module.scss";
import searchBtn from "../../../../assets/header/search.svg";
import { useTranslation } from "react-i18next";

const HeaderSearch = () => {
    const { t } = useTranslation();

    return (
        <div className={styles["header-searcher"]}>
            <input type="text" name="search" placeholder={t("header.placeholder")} className={styles["search-input"]} />
            <button className={styles["header-searcher-btn"]}>
                <img src={searchBtn} alt="" className={styles["search-logo"]} />
            </button>
        </div>
    )
}

export default HeaderSearch;