import styles from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CategoryCard from "../SubCategoryPage/CategoryCard/CategoryCard";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
    const { items } = useSelector(state => state.products);
    const {t} = useTranslation();
    const [searchParams] = useSearchParams();
    const query = (searchParams.get("q") || "").toLowerCase();
    const filteredItems = query
        ? items.filter(item => item.name.toLowerCase().includes(query))
        : [];


    return (
        <section className={styles.search}>
            <Breadcrumbs />
            <div className={styles.titleSection}>
                <h1 className={styles.title}>{t("search.title")}</h1>
                <span className={styles.quantity}>({filteredItems.length} {t("search.products")})</span>
            </div>

            <div className={styles.result}>
                {filteredItems.map(item => (<CategoryCard key={item.id} item={item} />))}
            </div>
        </section>
    )
}

export default SearchPage;