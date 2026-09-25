import styles from "./Searcher.module.scss";
import searchBtn from "../../../../assets/header/search.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Searcher = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");

    

    return (
        <div className={styles.searcher}>
            <input
                type="text"
                name="search"
                placeholder={t("header.placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
            />
            <button className={styles.searchBtn}>
                <img src={searchBtn} alt="" className={styles.searchLogo} />
            </button>
        </div>
    )
}

export default Searcher;