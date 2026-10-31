import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../store/slices/productsSlice";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/ui/Loader";
import CategoryCard from "./categoryCard/categoryCard";
import Filter from "../../components/Filter/Filter";
import { useTranslation } from "react-i18next";
import { ListFilter } from "lucide-react";


const SubCategoryPage = () => {
    const { subCategoryId } = useParams();
    const dispatch = useDispatch();
    const { categoryItems, isCategoryLoading, isCategoryError } = useSelector(state => state.products);
    const category = useSelector(state => state.categories.categories.find(cat => cat.id === subCategoryId));
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const minPrice = Math.min(...categoryItems.map(item => item.price));
    const maxPrice = Math.max(...categoryItems.map(item => item.price));
    const products = filteredProducts || categoryItems;
    const { t } = useTranslation();
    const [filtersCounter, setFiltersCounter] = useState(0);

    useEffect(() => {
        dispatch(fetchProductsByCategory(subCategoryId));
    }, [dispatch, subCategoryId]);


    if (isCategoryLoading) {
        return (
            <section className={styles.subCategoryPage}>
                <Loader />
            </section>
        )
    }

    if (isCategoryError) {
        return <h2>{isCategoryError}</h2>;
    }


    return (
        <section className={styles.subCategoryPage}>
            <Breadcrumbs />
            <Filter
                isActive={showFilters}
                setShowFilters={setShowFilters}
                items={categoryItems}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setFilteredProducts={setFilteredProducts}
                filters={category?.filters}
                setFiltersCounter={setFiltersCounter}
            />
            <div className={styles.filter}>
                <button
                    className={styles.filtersBtn}
                    onClick={() => setShowFilters(prev => !prev)}
                >
                    <ListFilter size={16} />
                    {t("sub_category_page.filters_btn")}
                    <span
                        className={`${styles.counter} ${filtersCounter ? styles.active : ""}`}
                    >
                        {filtersCounter}
                    </span>
                </button>
            </div>
            <div className={styles.subCategoryCards}>
                {products.map(item => (
                    <CategoryCard item={item} key={item.id} />
                ))}
            </div>
        </section >
    )
}

export default SubCategoryPage;