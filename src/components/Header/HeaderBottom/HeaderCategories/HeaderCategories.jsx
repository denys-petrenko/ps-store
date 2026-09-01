import styles from "./HeaderCategories.module.scss";
import catalogBtn from "../../../../assets/header/header-catalog-btn.svg";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useCategories } from "../../../../hooks/useCategories";
import { useCategoriesMenu } from "../../../../hooks/useCategoriesMenu";
import { useMediaQuery } from "../../../../hooks/useMediaQueries";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";


const HeaderCategories = () => {
    const { t } = useTranslation();
    const menuRef = useRef(null);
    const isMobile = useMediaQuery("(max-width: 1024px)");

    const { categories, isLoading, error } = useCategories();
    const menu = useCategoriesMenu(categories);
    const { state, actions } = menu;
    const { showCategories } = state;
    const { closeMenu, toggleMenu, resetCategory } = actions;


    const btnClass = `${styles["dropdown-btn"]} ${showCategories ? styles.active : ""}` ;
    const imgClass = `${styles["dropdown-btn-img"]} ${showCategories ? styles.active : ""}`;
    const listClass = `${styles.categories} ${showCategories ? styles.active : ""}`;

    useEffect(() => {
        const handleContentBtn = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        }

        document.addEventListener("click", handleContentBtn);
        return () => document.removeEventListener("click", handleContentBtn);
    }, [closeMenu])

    useLockBodyScroll(showCategories);

    return (
        <nav
            ref={menuRef}
            className={styles["dropdown-menu"]}
            onMouseLeave={() => {
                closeMenu();
                resetCategory();
            }}
        >
            <button
                className={btnClass}
                onClick={() => {
                    toggleMenu();
                    resetCategory();
                }}
            >
                <img
                    className={imgClass}
                    src={catalogBtn}
                    alt="Catalog button"
                />
                {t("header.dropdown.button")}
            </button>

            <div className={listClass}>
                {isMobile
                    ?
                    <MobileMenu
                        menu={menu}
                        loading={{ isLoading, error }}
                    />
                    : <DesktopMenu
                        menu={menu}
                        loading={{ isLoading, error }}
                    />
                }
            </div>
        </nav>
    )
}

export default HeaderCategories;