import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/ui/Loader";
import CategoryCard from "./categoryCard/categoryCard";

const SubCategoryPage = () => {
    const { subCategoryId } = useParams();
    const dispatch = useDispatch();
    const { items, isLoading, isError } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts(subCategoryId));
    }, [dispatch, subCategoryId]);

    if (isLoading) {
        return (
            <section className={styles.subCategoryPage}>
                <Loader />
            </section>
        )
    }

    if (isError) {
        return <h2>{isError}</h2>;
    }


    return (
        <section className={styles.subCategoryPage}>
            <Breadcrumbs />
            <div className={styles.subCategoryCards}>
                {items.map(item => (
                    <CategoryCard item={item} key={item.id} />
                ))}
            </div>
        </section >
    )
}

export default SubCategoryPage;