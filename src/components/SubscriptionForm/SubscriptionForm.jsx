import styles from "./SubscriptionForm.module.scss";


const SubscriptionForm = () => {
    return (
        <section className={styles.subscription}>
            <h2 className={styles["subscription-title"]}>Підпишись</h2>
            <p className={styles["subscription-subtitle"]}>І будь в курсі останніх новинок</p>
            <form action="POST" className={styles["subscription-form"]}>
                <input type="email" name="email" className={styles["subscription-form-email"]} placeholder="Введіть адресу електронної пошти" autoComplete="email" />
                <button type="submit" className={styles["subscription-form-btn"]}>Підписатись</button>
            </form>
        </section>
    )
}

export default SubscriptionForm;