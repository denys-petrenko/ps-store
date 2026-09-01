import styles from "./CategoryDetails.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const CategoryDetails = ({ state, closeMenu }) => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { activeCategory } = state;
    const listClass = `${styles.details} ${activeCategory?.children?.length ? styles.active : ""}`;


    return (
        <div className={listClass}>
            {activeCategory?.children?.map(cat => (
                <div key={cat.id} className={styles.subCategory}>
                    <Link
                        to={`/ps-store/${activeCategory.id}/${cat.id}`}
                        className={styles.title}
                        onClick={closeMenu}
                    >
                        {cat.title[lang]}
                    </Link>
                    <ul className={styles.list}>
                        {cat.children?.map(child => (
                            <Link
                                to={`/ps-store/${activeCategory.id}/${child.id}`}
                                className={styles.subTitle}
                                key={child.slug}
                                onClick={closeMenu}
                            >
                                {child.title[lang]}
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CategoryDetails;