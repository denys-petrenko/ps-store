import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/ui/Loader";
import { Link } from "react-router-dom";
import favIcon from "../../assets/best-offers/cards/fav-icon.svg";
import basket from "../../assets/card/shopping-cart.svg";
import { useEffect, useState } from "react";
import { getCategory } from "../../api/categoryApi";

const SubCategoryPage = () => {
    const { subCategoryId } = useParams();
    const { categoryId } = useParams();
    const [category, setCategory] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadCategory = async () => {
            try {
                const data = await getCategory(subCategoryId);
                setCategory(data);
            } catch (error) {
                console.error(error);
                setError(true)
            }
            finally { }
        }

        loadCategory();
    }, [])

    if (!category) {
        return (
            <section className={styles.subCategoryPage}>
                <Loader />
            </section>
        )
    }


    return (
        <section className={styles.subCategoryPage}>
            <Breadcrumbs />
            <div className={styles.subCategoryCards}>
                {category?.map(item => (
                    < div className={styles.categoryCard} key={item.id}>
                        <div className={styles.categoryCardMedia}>
                            <button className={styles.categoryCardFavourite}>
                                <img src={favIcon} alt="" />
                            </button>
                            <Link to={`/ps-store/${categoryId}/${subCategoryId}/${item.slug}`}>
                                <img className={styles.categoryCardImage} src={item.images?.[0]} alt={item.name} />
                            </Link>

                        </div>

                        <div className={styles.categoryCardContent}>
                            <div className={styles.categoryCardRating}>
                                <span className={styles.categoryCardStars}>★★★★☆</span>
                                <span className={styles.categoryCardReviews}>12 відгуків</span>
                            </div>
                            <h3 className={styles.categoryCardTitle}>{item?.name}</h3>
                            {/* <div className={styles.categoryCardColor}>green camouflage</div> */}
                            <div className={styles.categoryCardPrice}>{item?.price} ₴</div>
                        </div>
                        <button className={styles.buyBtn}>
                            <img src={basket} alt="Basket" className={styles.basket} />
                            Купити
                        </button>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default SubCategoryPage;