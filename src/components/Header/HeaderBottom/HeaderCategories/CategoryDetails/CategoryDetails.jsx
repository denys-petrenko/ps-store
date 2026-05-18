import styles from "./CategoryDetails.module.scss";
import { useTranslation } from "react-i18next";

const CategoryDetails = ({ state }) => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { activeCategory } = state;
    const listClass = `${styles.details} ${activeCategory?.children?.length ? styles.active : ""}`;

    return (
        <div className={listClass}>
            {
                activeCategory?.children?.map(cat => (
                    <div key={cat.id} className={styles["sub-category"]}>
                        <h3 className={styles.title}>{cat.title[lang]}</h3>
                        <ul className={styles.list}>
                            {
                                cat.children?.map(child => (
                                    <li key={child.slug} className={styles["sub-title"]}>{child.title[lang]}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryDetails;