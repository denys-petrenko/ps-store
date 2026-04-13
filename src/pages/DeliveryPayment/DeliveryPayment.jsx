import { useTranslation } from "react-i18next";
import styles from "./DeliveryPayment.module.scss";
import { useState } from "react";

const DeliveryPayment = () => {
    const { t } = useTranslation();
    const deliveryList = t("delivery_payment", { returnObjects: true });
    const [showAccordeon, setShowAccordeon] = useState(null);

    const handleAccordeon = (type) => {
        setShowAccordeon(prev => (prev === type ? null : type));
    }

    return (
        <section className={styles.delivery}>
            <h1 className={styles.title}>{t(deliveryList.title)}</h1>
            <div className={styles.accordion}>
                <div className={styles["accordeon-item"]} >
                    <div
                        onClick={() => handleAccordeon("payment")}
                        className={
                            showAccordeon === "payment"
                                ? `${styles["accordion-button"]} ${styles.active}`
                                : styles["accordion-button"]
                        }
                    >
                        {t(deliveryList.payment.title)}
                    </div>
                    <div
                        className={
                            showAccordeon === "payment"
                                ? `${styles["accordeon-content"]} ${styles.active}`
                                : styles["accordeon-content"]
                        }
                    >
                        {deliveryList.payment.list.map((item, i) => (
                            <div key={`payment-${i}`} className={styles.card}>
                                <h3 className={styles["card-title"]}>{item.title}</h3>
                                <p className={styles["card-description"]}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>



                <div className={styles["accordeon-item"]} >
                    <div
                        onClick={() => handleAccordeon("delivery")}
                        className={
                            showAccordeon === "delivery"
                                ? `${styles["accordion-button"]} ${styles.active}`
                                : styles["accordion-button"]
                        }
                    >
                        {t(deliveryList.delivery.title)}
                    </div>
                    <div
                        className={
                            showAccordeon === "delivery"
                                ? `${styles["accordeon-content"]} ${styles.active}`
                                : styles["accordeon-content"]
                        }
                    >
                        {deliveryList.delivery.list.map((item, i) => (
                            <div key={`payment-${i}`} className={styles.card}>
                                <h3 className={styles["card-title"]}>{item.title}</h3>
                                <p className={styles["card-description"]}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeliveryPayment;