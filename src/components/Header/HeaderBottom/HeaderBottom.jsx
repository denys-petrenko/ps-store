import styles from "./HeaderBottom.module.scss";
import { useTranslation } from "react-i18next";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import Searcher from "./Searcher/Searcher";
import HeaderActions from "./HeaderActions/HeaderActions";

const HeaderBottom = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.headerBottom}>
            <HeaderCategories />
            <Searcher />
            <HeaderActions />
        </div>
    )
}

export default HeaderBottom;