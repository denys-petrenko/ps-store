import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { useTranslation } from "react-i18next";
import Loader from "../../components/ui/Loader";
import { useMemo } from "react";

const CategoryPage = () => {
    const { categoryId } = useParams();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { categories, error } = useCategories();
    const activeCategory = useMemo(() =>
        categories.find(cat => cat.id === categoryId),
        [categories, categoryId]
    );

    if (!activeCategory) {
        return (
            <section className={styles.category}>
                <Loader />
            </section>
        )
    }

    if (error) {
        return (
            <section className={styles.category}>
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
                            {cat.image && (
                                <div className={styles.imageContainer}>
                                    <img src={cat.image}
                                        alt={cat.title}
                                        className={styles.img}
                                    />
                                </div>
                            )}
                            <h3 className={styles.cardTitle}>{cat.title[lang]}</h3>
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