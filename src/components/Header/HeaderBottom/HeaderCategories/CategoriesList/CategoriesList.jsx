import styles from "./CategoriesList.module.scss";
import { useTranslation } from "react-i18next";
import Loader from "../../../../ui/Loader";
import { NavLink } from "react-router-dom";

const CategoriesList = ({ data, loading }) => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { categories, selectCategory } = data;
    const { isLoading, error } = loading;


    if (error) {
        return (
            <ul className={styles.list}>
                <li className={styles.error}>Failed to load categories</li>
            </ul>
        );
    }

    if (isLoading) {
        return (
            <ul className={styles.list}>
                <li><Loader /></li>
            </ul>
        );
    }

    return (
        <ul className={styles.list}>
            {categories
                .map(item => (
                    <li
                        key={item.id}
                        className={styles.listItem}
                        onMouseEnter={() => selectCategory(item.id)}
                        onClick={() => selectCategory(item.id)}
                    >
                        <NavLink
                            className={styles.listItemLink}
                            to={`/ps-store/${item.slug}`}
                        >
                            {item.title[lang]}
                        </NavLink>
                    </li>
                ))}
        </ul>
    )
}

export default CategoriesList;