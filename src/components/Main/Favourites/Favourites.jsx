import styles from "./Favourites.module.scss";
import ps from "../../../assets/favourites/play-station.png";
import xbox from "../../../assets/favourites/xbox-x.png";
import nintendo from "../../../assets/favourites/nintendo-switch.png";
import psp from "../../../assets/favourites/ps-portable.png";

const Favourites = () => {
    return (
        <section className={styles.favourites}>
            <h2 className={styles.title}>
                Популярні категорії нашого магазину
            </h2>
            <div className={styles.category}>
                <img className={styles["category-cover"]} src={ps} alt="Play Station 5" />
                <div className={styles.shade}>
                    <button className={styles["category-button"]}>Перейти</button>
                </div>
            </div>
            <div className={styles.category}>
                <img className={styles["category-cover"]} src={xbox} alt="Xbox X" />
                <div className={styles.shade}>
                    <button className={styles["category-button"]}>Перейти</button>
                </div>
            </div>
            <div className={styles.category}>
                <img className={styles["category-cover"]} src={nintendo} alt="Nintendo Switch" />
                <div className={styles.shade}>
                    <button className={styles["category-button"]}>Перейти</button>
                </div>
            </div>
            <div className={styles.category}>
                <img className={styles["category-cover"]} src={psp} alt="Sony Playstation Portable" />
                <div className={styles.shade}>
                    <button className={styles["category-button"]}>Перейти</button>
                </div>
            </div>
        </section>
    )
}

export default Favourites;