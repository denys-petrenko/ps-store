import styles from "./SubscriptionForm.module.scss";
import { useTranslation } from "react-i18next";

const SubscriptionForm = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.subscription}>
            <h2 className={styles["subscription-title"]}>{t("subscription.title")}</h2>
            <p className={styles["subscription-subtitle"]}>{t("subscription.subtitle")}</p>
            <form action="POST" className={styles["subscription-form"]}>
                <input type="email" name="email" className={styles["subscription-form-email"]} placeholder={t("subscription.form.placeholder")} />
                <button type="submit" className={styles["subscription-form-btn"]}>{t("subscription.form.button")}</button>
            </form>
        </section>
    )
}

export default SubscriptionForm;