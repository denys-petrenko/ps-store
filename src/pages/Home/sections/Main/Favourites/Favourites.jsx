import styles from "./Favourites.module.scss";
import ps from "../../../../../assets/favourites/play-station.png";
import psDesktop from "../../../../../assets/favourites/ps5-desktop.png";
import xbox from "../../../../../assets/favourites/xbox-x.png";
import xboxDesktop from "../../../../../assets/favourites/xbox-x-desktop.png";
import nintendo from "../../../../../assets/favourites/nintendo-switch.png";
import psp from "../../../../../assets/favourites/ps-portable.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Favourites = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className={styles.favourites}>
            <h2 className={styles.title}>
                {t("main.favourites.title")}
            </h2>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <h3 className={styles["category-title"]}>play station 5</h3>
                    <picture className={styles["category-media"]}>
                        <source media="(max-width: 760px)" srcSet={ps} />
                        <img className={styles["category-cover"]} src={psDesktop} alt="Play Station 5" />
                    </picture>
                    <div className={styles.shade}>
                        <button className={styles["category-button"]} onClick={() => navigate("/ps-store/products")}>Перейти</button>
                    </div>
                </div>
                <div className={styles.category}>
                    <h3 className={styles["category-title"]}>xbox series x</h3>
                    <picture className={styles["category-media"]}>
                        <source media="(max-width: 760px)" srcSet={xbox} />
                        <img className={styles["category-cover"]} src={xboxDesktop} alt="Xbox X" />
                    </picture>
                    <div className={styles.shade}>
                        <button className={styles["category-button"]}>Перейти</button>
                    </div>
                </div>
                <div className={styles.category}>
                    <h3 className={styles["category-title"]}>nintendo switch</h3>
                    <img className={styles["category-cover"]} src={nintendo} alt="Nintendo Switch" />
                    <div className={styles.shade}>
                        <button className={styles["category-button"]}>Перейти</button>
                    </div>
                </div>
                <div className={styles.category}>
                    <h3 className={styles["category-title"]}>play station vr2</h3>
                    <img className={styles["category-cover"]} src={psp} alt="Sony Playstation VR2" />
                    <div className={styles.shade}>
                        <button className={styles["category-button"]}>Перейти</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favourites;