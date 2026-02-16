import styles from "./BestOffers.module.scss";
import popular from "../../assets/best-offers/popular.svg";
import news from "../../assets/best-offers/new.svg";
import discount from "../../assets/best-offers/discount.svg";
import dualshock from "../../assets/best-offers/cards/dualshock4.svg";
import favIcon from "../../assets/best-offers/cards/fav-icon.svg";


const BestOffers = () => {
    return (
        <section className={styles["best-offers"]}>
            <h2 className={styles.title}>Краща пропозиція</h2>
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
                    <div className={styles["catalog-card-media"]}>
                        <button className={styles["catalog-card-favourite"]}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles["catalog-card-image"]} src={dualshock} alt="" />
                    </div>
                    <div className={styles["catalog-card-content"]}>
                        <div className={styles["catalog-card-rating"]}>
                            <span className={styles["catalog-card-stars"]}>★★★★☆</span>
                            <span className={styles["catalog-card-reviews"]}>12 відгуків</span>
                        </div>
                        <h3 className={styles["catalog-card-title"]}>Sony DualShock 4 Version2</h3>
                        <div className={styles["catalog-card-color"]}>green camouflage</div>
                        <div className={styles["catalog-card-price"]}>1599 грн</div>
                    </div>
                </div>
                <div className={styles["catalog-card"]}>
                    <div className={styles["catalog-card-media"]}>
                        <button className={styles["catalog-card-favourite"]}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles["catalog-card-image"]} src={dualshock} alt="" />
                    </div>
                    <div className={styles["catalog-card-content"]}>
                        <div className={styles["catalog-card-rating"]}>
                            <span className={styles["catalog-card-stars"]}>★★★★☆</span>
                            <span className={styles["catalog-card-reviews"]}>12 відгуків</span>
                        </div>
                        <h3 className={styles["catalog-card-title"]}>Sony DualShock 4 Version2</h3>
                        <div className={styles["catalog-card-color"]}>green camouflage</div>
                        <div className={styles["catalog-card-price"]}>1599 грн</div>
                    </div>
                </div>
                <div className={styles["catalog-card"]}>
                    <div className={styles["catalog-card-media"]}>
                        <button className={styles["catalog-card-favourite"]}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles["catalog-card-image"]} src={dualshock} alt="" />
                    </div>
                    <div className={styles["catalog-card-content"]}>
                        <div className={styles["catalog-card-rating"]}>
                            <span className={styles["catalog-card-stars"]}>★★★★☆</span>
                            <span className={styles["catalog-card-reviews"]}>12 відгуків</span>
                        </div>
                        <h3 className={styles["catalog-card-title"]}>Sony DualShock 4 Version2</h3>
                        <div className={styles["catalog-card-color"]}>green camouflage</div>
                        <div className={styles["catalog-card-price"]}>1599 грн</div>
                    </div>
                </div>
                <div className={styles["catalog-card"]}>
                    <div className={styles["catalog-card-media"]}>
                        <button className={styles["catalog-card-favourite"]}>
                            <img src={favIcon} alt="" />
                        </button>
                        <img className={styles["catalog-card-image"]} src={dualshock} alt="" />
                    </div>
                    <div className={styles["catalog-card-content"]}>
                        <div className={styles["catalog-card-rating"]}>
                            <span className={styles["catalog-card-stars"]}>★★★★☆</span>
                            <span className={styles["catalog-card-reviews"]}>12 відгуків</span>
                        </div>
                        <h3 className={styles["catalog-card-title"]}>Sony DualShock 4 Version2</h3>
                        <div className={styles["catalog-card-color"]}>green camouflage</div>
                        <div className={styles["catalog-card-price"]}>1599 грн</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestOffers;