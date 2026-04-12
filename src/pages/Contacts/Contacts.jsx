import styles from "./Contacts.module.scss";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";

const Contacts = () => {
    const [showAccordeon, setShowAccordeon] = useState(null);
    const { t } = useTranslation();
    const supportList = t("contacts", { returnObjects: true });

    const handleAccordeon = (type) => {
        setShowAccordeon(prev => (prev === type ? null : type));
    }

    return (
        <>
            <section className={styles.contacts}>
                <h1 className={styles.title}>{t("contacts.title")}</h1>
                <div className={styles.accordion}>
                    <div className={styles["accordeon-item"]} >
                        <div
                            onClick={() => handleAccordeon("support")}
                            className={
                                showAccordeon === "support"
                                    ? `${styles["accordion-button"]} ${styles.active}`
                                    : styles["accordion-button"]
                            }
                        >
                            {t("contacts.customer_support.title")}
                        </div>
                        <div
                            className={
                                showAccordeon === "support"
                                    ? `${styles["accordeon-content"]} ${styles.active}`
                                    : styles["accordeon-content"]
                            }
                        >
                            <ul className={styles["phones-list"]}>
                                {supportList.customer_support.numbers.map((item, i) => (
                                    <li key={`phone-${i}`} className={styles["phones-list-item"]}>
                                        <a key={`number-${i}`} href={`tel:${item.ref}`} className={styles["phone-link"]}>
                                            {item.number}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <dl className={styles.schedule}>
                                {supportList.customer_support.schedule.map((item, i) => (
                                    <React.Fragment key={`schedule-${i}`}>
                                        <dt key={`date-${i}`} className={styles["schedule-date"]}>{item.date}</dt>
                                        <dd key={`time-${i}`} className={styles["schedule-time"]}>{item.time}</dd>
                                    </React.Fragment>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className={styles["accordeon-item"]}>
                        <div
                            onClick={() => handleAccordeon("pickup")}
                            className={
                                showAccordeon === "pickup"
                                    ? `${styles["accordion-button"]} ${styles.active}`
                                    : styles["accordion-button"]
                            }
                        >
                            {t("contacts.pickup_points.title")}
                        </div>
                        <div
                            className={
                                showAccordeon === "pickup"
                                    ? `${styles["accordeon-content"]} ${styles.active}`
                                    : styles["accordeon-content"]
                            }
                        >
                            <p className={styles.description}>{t("contacts.pickup_points.description")}</p>
                            <ul className={styles["address-list"]}>
                                {supportList.pickup_points.links.map((item, i) => (
                                    <li key={`address-${i}`} className={styles["address-item"]}>
                                        {item}
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <SubscriptionForm />
        </>

    )
}

export default Contacts;