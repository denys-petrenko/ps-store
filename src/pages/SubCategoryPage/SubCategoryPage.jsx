import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../store/slices/productsSlice";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/ui/Loader";
import CategoryCard from "./categoryCard/categoryCard";

const SubCategoryPage = () => {
    const { subCategoryId } = useParams();
    const dispatch = useDispatch();
    const { items, categoryItems, isCategoryLoading, isCategoryError } = useSelector(state => state.products);

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
            <div className={styles.subCategoryCards}>
                {categoryItems.map(item => (
                    <CategoryCard item={item} key={item.id} />
                ))}
            </div>
        </section >
    )
}

export default SubCategoryPage;