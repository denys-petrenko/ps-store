import styles from "./MobileMenu.module.scss";
import CategoriesList from "../CategoriesList/CategoriesList";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import HeaderActions from "../../HeaderActions/HeaderActions";
import HeaderSearch from "../../HeaderSearch/HeaderSearch";
import { useTranslation } from "react-i18next";


const MobileMenu = ({ menu, loading }) => {
    const { t } = useTranslation();
    const { state, actions, data } = menu;
    const { showCategories, activeCategoryId } = state;
    const { selectCategory } = actions;
    const { categories } = data;
    const { closeMenu, resetCategory } = actions;
    const backBtn = `${styles.backBtn} ${activeCategoryId ? styles.active : ""}`;


    return (
        <div className={styles.mobile} onClick={(e) => e.stopPropagation()}>
            <div className={styles.menuHeader}>
                <button className={backBtn} onClick={() => resetCategory()}>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    {t("header.dropdown.button")}
                </button>
                <button className={styles.closeBtn} onClick={() => {
                    closeMenu();
                    resetCategory();
                }}>
                    <svg width="34" height="34" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#555" strokeWidth="2" />
                    </svg>
                </button>
            </div>
            <HeaderSearch />
            {!activeCategoryId
                ? (
                    <CategoriesList
                        data={{ categories, showCategories, selectCategory, closeMenu }}
                        loading={loading}
                    />
                )
                : (
                    <CategoryDetails
                        state={state}
                        closeMenu={closeMenu}
                    />
                )
            }
            <HeaderActions />
        </div>
    )
}

export default MobileMenu;