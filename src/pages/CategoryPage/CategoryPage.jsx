import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { useTranslation } from "react-i18next";
import Loader from "../../components/ui/Loader";

const CategoryPage = () => {
    const { categoryId } = useParams();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { categories, error } = useCategories();
    const activeCategory = categories.find(cat => cat.id === categoryId);

    if (!activeCategory) {
        return (
            <section className={styles["category-page"]}>
                <Loader />
            </section>
        )
    }

    if (error) {
        return (
            <section className={styles["category-page"]}>
                <p>Failed to load category</p>
            </section>
        )
    }

    return (
        <section className={styles.category}>
            <h1 className={styles.title}>{activeCategory?.title[lang]}</h1>
            <div className={styles.cards}>
                {
                    activeCategory?.children?.map(cat => (
                        <div key={cat.id} className={styles.card}>
                            <h3 className={styles["card-title"]}>{cat.title[lang]}</h3>
                            <ul className={styles.list}>
                                {cat.children?.map(child => (
                                    <li key={child.slug} className={styles.child}>{child.title[lang]}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CategoryPage;