import styles from "./HeaderBottom.module.scss";
import { useTranslation } from "react-i18next";

import HeaderCategories from "./HeaderCategories/HeaderCategories";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderActions from "./HeaderActions/HeaderActions";

const HeaderBottom = () => {
    const { t } = useTranslation();

    return (
        <div className={styles["header-bottom"]}>
            <HeaderCategories />
            <HeaderSearch />
            <HeaderActions />
        </div>
    )
}

export default HeaderBottom;