import styles from "./DesktopMenu.module.scss";
import CategoriesList from "../CategoriesList/CategoriesList";
import CategoryDetails from "../CategoryDetails/CategoryDetails";

const DesktopMenu = ({ menu, loading, trigger }) => {
    const { state, actions, data } = menu;
    const { showCategories } = state;
    const { selectCategory } = actions;
    const { categories } = data;

    return (
        <div className={styles["desktop-menu"]}>
            <CategoriesList
                data={{ categories, showCategories, selectCategory }}
                loading={loading}
                trigger={trigger}
            />
            <CategoryDetails state={state} />
        </div>
    )
}

export default DesktopMenu;