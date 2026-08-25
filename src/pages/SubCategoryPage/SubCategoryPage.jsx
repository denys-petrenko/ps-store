import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/ui/Loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import BuyButton from "../ProductPage/components/PurchaseCard/BuyButton/BuyButton";
import FavoriteBtn from "../ProductPage/components/PurchaseCard/FavoriteBtn/FavoriteBtn";
import PriceBlock from "../ProductPage/components/PurchaseCard/PriceBlock/PriceBlock";

import Slider from "../Home/sections/Slider/Slider";


const SubCategoryPage = () => {
    const { categoryId, subCategoryId } = useParams();
    const dispatch = useDispatch();
    const { items, isLoading, isError } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts(subCategoryId));
    }, [dispatch, subCategoryId]);

    const createSlides = (product) =>
        product.images?.map((image, ind) => ({
            id: `${product.id}-${ind}`,
            image: image,
            name: product.name
        })) ?? [];

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
                    <div className={styles.categoryCard} key={item.id}>
                        <div className={styles.categoryCardMedia}>
                            <FavoriteBtn product={item} variant="category" />
                            <Slider
                                variant="category"
                                autoplay={false}
                                data={createSlides(item)}
                                to={`/ps-store/${categoryId}/${subCategoryId}/${item.slug}`}
                            />
                        </div>

                        <div className={styles.categoryCardContent}>
                            <span className={styles.categoryCardCode}>Code: {item.code}</span>
                            <div className={styles.categoryCardRating}>
                                <span className={styles.categoryCardStars}>★★★★☆</span>
                                <span className={styles.categoryCardReviews}>12 відгуків</span>
                            </div>
                            <Link
                                to={`/ps-store/${categoryId}/${subCategoryId}/${item.slug}`}
                                className={styles.link}
                            >
                                <h3 className={styles.categoryCardTitle}>{item.name}</h3>
                            </Link>
                            {/* <div className={styles.categoryCardColor}>green camouflage</div> */}

                            <PriceBlock product={item} isStickyMode={true} variant="category" />
                        </div>
                        <BuyButton product={item} variant="category" />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default SubCategoryPage;