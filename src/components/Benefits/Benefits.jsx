import styles from "./Benefits.module.scss";
import newLevel from "../../assets/benefits/benefits-new-level.png";
import products from "../../assets/benefits/benefits-products.png";
import { useTranslation } from "react-i18next";

const Benefits = () => {
    const { t } = useTranslation();
    const list = t("benefits.bottom.description_list", { returnObjects: true });
    const descriptionsArray = t("benefits.bottom.description_bottom", { returnObjects: true });

    return (
        <section className={styles.benefits}>
            <div className={styles["benefits-card"]}>
                <div className={styles["benefits-card-media"]}>
                    <img className={styles["benefits-card-img"]} src={newLevel} alt="Benefits" />
                </div>
                <div className={styles["benefits-card-content"]}>
                    <h3 className={styles["benefits-card-title"]}><span className={styles["benefits-card-brand"]}>«UP2DATE»</span> - {t("benefits.top.title")}</h3>
                    <p className={styles["benefits-card-description"]}>
                        {t("benefits.top.description_top")}
                    </p>
                    <p className={styles["benefits-card-description"]}>
                        {t("benefits.top.description_bottom")}
                    </p>
                </div>
            </div>
            <div className={styles["benefits-card"]}>
                <div className={styles["benefits-card-media"]}>
                    <img className={styles["benefits-card-img"]} src={products} alt="Benefits" />
                </div>
                <div className={styles["benefits-card-content"]}>
                    <h3 className={styles["benefits-card-title"]}>{t("benefits.bottom.title")}</h3>
                    <p className={styles["benefits-card-description"]}>
                        {t("benefits.bottom.description_top")}
                    </p>
                    <ul className={styles["benefits-card-list"]}>
                        {list.map((el, i) => <li key={i} className={styles["benefits-card-item"]}>{t(el)}</li>)}
                    </ul>
                    {descriptionsArray.map((el, i) => <p key={i} className={styles["benefits-card-description"]}>{t(el)}</p>)}
                </div>
            </div>
        </section>
    )
}

export default Benefits;