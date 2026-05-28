import styles from "./CategoriesList.module.scss";
import { useTranslation } from "react-i18next";
import Loader from "../../../../ui/Loader";
import { NavLink } from "react-router-dom";

const CategoriesList = ({ data, loading, trigger }) => {
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
            {
                categories
                    .map(item => (
                        <li
                            key={item.id}
                            className={styles["list-item"]}
                            onMouseEnter={
                                trigger === "hover"
                                    ? () => selectCategory(item.id)
                                    : undefined
                            }
                            onClick={
                                trigger === "click"
                                    ? () => selectCategory(item.id)
                                    : undefined
                            }
                        >
                            <NavLink
                                className={styles["list-item-link"]}
                                to={`ps-store/${item.slug}`}
                            >
                                {item.title[lang]}
                            </NavLink>
                        </li>
                    ))
            }
        </ul>
    )
}

export default CategoriesList;