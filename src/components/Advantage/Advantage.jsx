import styles from "./Advantage.module.scss";
import car from "../../assets/advantage/car-delivery.svg";
import guarantee from "../../assets/advantage/guarantee.svg";
import loan from "../../assets/advantage/loan.svg";
import payment from "../../assets/advantage/payment.svg";

const Advantage = () => {
    return (
        <section className={styles.advantage}>
            <div className={styles["advantage-card"]}>
                <img src={car} alt="Delivery" className={styles.logo} />
                <h1 className={styles.title}>
                    Доставка по всій Україні
                </h1>
                <p className={styles.description}>
                    Понад 120 міст
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={guarantee} alt="Guarantee" className={styles.logo} />
                <h1 className={styles.title}>
                    Гарантія
                </h1>
                <p className={styles.description}>
                    Гарантія 18 місяців
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={loan} alt="Loan" className={styles.logo} />
                <h1 className={styles.title}>
                    Розстрочка
                </h1>
                <p className={styles.description}>
                    Розстрочка до 18 місяців
                </p>
            </div>
            <div className={styles["advantage-card"]}>
                <img src={payment} alt="Payment" className={styles.logo} />
                <h1 className={styles.title}>
                    Оплата
                </h1>
                <p className={styles.description}>
                    Великий вибір варіантів оплати
                </p>
            </div>
        </section>
    )
}

export default Advantage;