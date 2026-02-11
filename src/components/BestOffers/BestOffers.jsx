import styles from "./BestOffers.module.scss";
import popular from "../../assets/best-offers/popular.svg";
import news from "../../assets/best-offers/new.svg";
import discount from "../../assets/best-offers/discount.svg";


const BestOffers = () => {
    return (
        <section className={styles["best-offers"]}>
            <h1 className={styles.title}>Краща пропозиція</h1>
            <nav className={styles["catalog-nav"]}>
                <ul className={styles["catalog-nav-list"]}>
                    <li className={styles["catalog-nav-item"]}>
                        <img src={popular} alt="Popular products" />
                        <button className={styles["catalog-nav-btn"]}>Популярні</button>
                    </li>
                    <li className={styles["catalog-nav-item"]}>
                        <img src={news} alt="New products" />
                        <button className={styles["catalog-nav-btn"]}>Новинки</button>
                    </li>
                    <li className={styles["catalog-nav-item"]}>
                        <img src={discount} alt="Discount" />
                        <button className={styles["catalog-nav-btn"]}>Знижки</button>
                    </li>
                </ul>
            </nav>
            <div className={styles["catalog-cards"]}>
                <div className={styles["catalog-card"]}>

                </div>
 
            </div >
        </section>
    )
}

export default BestOffers;