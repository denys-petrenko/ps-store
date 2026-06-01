import styles from "./SubCategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


import dualshock from "../../assets/best-offers/cards/dualshock4.svg";
import favIcon from "../../assets/best-offers/cards/fav-icon.svg";

import basket from "../../assets/card/shopping-cart.svg";


const SubCategoryPage = () => {
    const { subCategoryId } = useParams();
    const { categories, error } = useCategories()
    const subCategory = categories.filter(item => item.id === subCategoryId);
    console.log(categories);

    return (
        <section className={styles.subCategoryPage}>
            <Breadcrumbs />
            <h1 className={styles.title}>{subCategory}</h1>
            <div className={styles.subCategoryCards}>
                <div className={styles.categoryCard}>
                    <div className={styles.categoryCardMedia}>
                        <button className={styles.categoryCardFavourite}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles.categoryCardImage} src={dualshock} alt="" />
                    </div>
                    <div className={styles.categoryCardContent}>
                        <div className={styles.categoryCardRating}>
                            <span className={styles.categoryCardStars}>★★★★☆</span>
                            <span className={styles.categoryCardReviews}>12 відгуків</span>
                        </div>
                        <h3 className={styles.categoryCardTitle}>Sony DualShock 4 Version2</h3>
                        <div className={styles.categoryCardColor}>green camouflage</div>
                        <div className={styles.categoryCardPrice}>1599 грн</div>
                    </div>
                    <button className={styles.buyBtn}>
                        <img src={basket} alt="Basket" className={styles.basket} />
                        Купити
                    </button>
                </div>
                <div className={styles.categoryCard}>
                    <div className={styles.categoryCardMedia}>
                        <button className={styles.categoryCardFavourite}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles.categoryCardImage} src={dualshock} alt="" />
                    </div>
                    <div className={styles.categoryCardContent}>
                        <div className={styles.categoryCardRating}>
                            <span className={styles.categoryCardStars}>★★★★☆</span>
                            <span className={styles.categoryCardReviews}>12 відгуків</span>
                        </div>
                        <h3 className={styles.categoryCardTitle}>Sony DualShock 4 Version2</h3>
                        <div className={styles.categoryCardColor}>green camouflage</div>
                        <div className={styles.categoryCardPrice}>1599 грн</div>
                    </div>
                    <button className={styles.buyBtn}>
                        <img src={basket} alt="Basket" className={styles.basket} />
                        Купити
                    </button>
                </div>
                <div className={styles.categoryCard}>
                    <div className={styles.categoryCardMedia}>
                        <button className={styles.categoryCardFavourite}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles.categoryCardImage} src={dualshock} alt="" />
                    </div>
                    <div className={styles.categoryCardContent}>
                        <div className={styles.categoryCardRating}>
                            <span className={styles.categoryCardStars}>★★★★☆</span>
                            <span className={styles.categoryCardReviews}>12 відгуків</span>
                        </div>
                        <h3 className={styles.categoryCardTitle}>Sony DualShock 4 Version2</h3>
                        <div className={styles.categoryCardColor}>green camouflage</div>
                        <div className={styles.categoryCardPrice}>1599 грн</div>
                    </div>
                    <button className={styles.buyBtn}>
                        <img src={basket} alt="Basket" className={styles.basket} />
                        Купити
                    </button>
                </div>
                <div className={styles.categoryCard}>
                    <div className={styles.categoryCardMedia}>
                        <button className={styles.categoryCardFavourite}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles.categoryCardImage} src={dualshock} alt="" />
                    </div>
                    <div className={styles.categoryCardContent}>
                        <div className={styles.categoryCardRating}>
                            <span className={styles.categoryCardStars}>★★★★☆</span>
                            <span className={styles.categoryCardReviews}>12 відгуків</span>
                        </div>
                        <h3 className={styles.categoryCardTitle}>Sony DualShock 4 Version2</h3>
                        <div className={styles.categoryCardColor}>green camouflage</div>
                        <div className={styles.categoryCardPrice}>1599 грн</div>
                    </div>
                    <button className={styles.buyBtn}>
                        <img src={basket} alt="Basket" className={styles.basket} />
                        Купити
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SubCategoryPage;