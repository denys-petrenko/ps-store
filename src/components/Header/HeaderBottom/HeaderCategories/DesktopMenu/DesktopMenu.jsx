import styles from "./DesktopMenu.module.scss";
import CategoriesList from "../CategoriesList/CategoriesList";
import CategoryDetails from "../CategoryDetails/CategoryDetails";

const DesktopMenu = ({ menu, loading }) => {
    const { state, actions, data } = menu;
    const { showCategories } = state;
    const { selectCategory, closeMenu } = actions;
    const { categories } = data;

    return (
        <div className={styles.desktopMenu}>
            <CategoriesList
                data={{ categories, showCategories, selectCategory }}
                loading={loading}
            />
            <CategoryDetails
                state={state}
                closeMenu={closeMenu}
            />
        </div>
    )
}

export default DesktopMenu;