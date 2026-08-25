import styles from "./categoryCard.module.scss";
import FavoriteBtn from "../../ProductPage/components/PurchaseCard/FavoriteBtn/FavoriteBtn";
import Slider from "../../Home/sections/Slider/Slider";
import { Link, useParams } from "react-router-dom";
import PriceBlock from "../../ProductPage/components/PurchaseCard/PriceBlock/PriceBlock";
import BuyButton from "../../ProductPage/components/PurchaseCard/BuyButton/BuyButton";


const CategoryCard = ({ item }) => {
    const { categoryId, subCategoryId } = useParams();

    const createSlides = (product) =>
        product.images?.map((image, ind) => ({
            id: `${product.id}-${ind}`,
            image: image,
            name: product.name
        })) ?? [];

    return (
        <div className={styles.categoryCard} >
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
    )
}

export default CategoryCard;