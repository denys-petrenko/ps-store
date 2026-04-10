import styles from "./Advantage.module.scss";
import car from "../../../../../assets/advantage/car-delivery.svg";
import guarantee from "../../../../../assets/advantage/guarantee.svg";
import loan from "../../../../../assets/advantage/loan.svg";
import payment from "../../../../../assets/advantage/payment.svg";
import { useTranslation } from "react-i18next";

const Advantage = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.advantage}>
            <div className={styles["advantage-card"]}>
                <img src={car} alt="Delivery" className={styles.logo} />
                <h1 className={styles.title}>
                    {t("main.advantage.delivery.title")}
                </h1>
                <p className={styles.description}>
                    {t("main.advantage.delivery.description")}
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={guarantee} alt="Guarantee" className={styles.logo} />
                <h1 className={styles.title}>
                    {t("main.advantage.guarantee.title")}
                </h1>
                <p className={styles.description}>
                    {t("main.advantage.guarantee.description")}
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={loan} alt="Loan" className={styles.logo} />
                <h1 className={styles.title}>
                    {t("main.advantage.installment.title")}
                </h1>
                <p className={styles.description}>
                    {t("main.advantage.installment.description")}
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={payment} alt="Payment" className={styles.logo} />
                <h1 className={styles.title}>
                    {t("main.advantage.payment.title")}
                </h1>
                <p className={styles.description}>
                    {t("main.advantage.payment.description")}
                </p>
            </div>
        </section>
    )
}

export default Advantage;