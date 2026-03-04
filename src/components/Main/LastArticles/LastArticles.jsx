import styles from "./LastArticles.module.scss";
import nintendo from "../../../assets/last-articles/nintendo-swt.png";

const LastArticles = () => {
    return (
        <section className={styles["last-articles"]}>
            <h2 className={styles["last-articles-title"]}>Останні статті</h2>
            <div className={styles["articles-cards"]}>
                <div className={styles["article-card"]}>
                    <div className={styles["article-card-media"]}>
                        <img className={styles["article-card-image"]} src={nintendo} alt="" />
                    </div>
                    <article className={styles["article-card-content"]}>
                        <h3 className={styles["article-card-title"]}>Огляд ігрової приставки Nintendo Switch</h3>
                        <p className={styles["article-card-text"]}>Після минулорічного успіху Покемонів, компанія Nintendo - вирішила продовжити шокувати користувачів ..</p>
                        <div className={styles["article-card-meta"]}>
                            <a href="" className={styles["article-card-link"]}>читати повністю</a>
                            <span className={styles["article-card-date"]}>17 Черв. 2016</span>
                        </div>
                    </article>
                </div>
                <div className={styles["article-card"]}>
                    <div className={styles["article-card-media"]}>
                        <img className={styles["article-card-image"]} src={nintendo} alt="" />
                    </div>
                    <article className={styles["article-card-content"]}>
                        <h3 className={styles["article-card-title"]}>Огляд ігрової приставки Nintendo Switch</h3>
                        <p className={styles["article-card-text"]}>Після минулорічного успіху Покемонів, компанія Nintendo - вирішила продовжити шокувати користувачів ..</p>
                        <div className={styles["article-card-meta"]}>
                            <a href="" className={styles["article-card-link"]}>читати повністю</a>
                            <span className={styles["article-card-date"]}>17 Черв. 2016</span>
                        </div>
                    </article>
                </div>
                <div className={styles["article-card"]}>
                    <div className={styles["article-card-media"]}>
                        <img className={styles["article-card-image"]} src={nintendo} alt="" />
                    </div>
                    <article className={styles["article-card-content"]}>
                        <h3 className={styles["article-card-title"]}>Огляд ігрової приставки Nintendo Switch</h3>
                        <p className={styles["article-card-text"]}>Після минулорічного успіху Покемонів, компанія Nintendo - вирішила продовжити шокувати користувачів ..</p>
                        <div className={styles["article-card-meta"]}>
                            <a href="" className={styles["article-card-link"]}>читати повністю</a>
                            <span className={styles["article-card-date"]}>17 Черв. 2016</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default LastArticles;