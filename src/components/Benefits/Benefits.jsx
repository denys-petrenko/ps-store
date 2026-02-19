import styles from "./Benefits.module.scss";
import newLevel from "../../assets/benefits/benefits-new-level.png";
import products from "../../assets/benefits/benefits-products.png";

const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <div className={styles["benefits-card"]}>
                <div className={styles["benefits-card-media"]}>
                    <img className={styles["benefits-card-img"]} src={newLevel} alt="" />
                </div>
                <div className={styles["benefits-card-content"]}>
                    <h3 className={styles["benefits-card-title"]}><span className={styles["benefits-card-brand"]}>«UP2DATE»</span> - Новий рівень у світі електроніки та цифрової техніки!</h3>
                    <p className={styles["benefits-card-description"]}>
                        Ласкаво просимо до Up2Date – інтернет-магазин, знайомий кожному геймеру в Україні! Вже багато років ми займаємося продажем товарів, так чи інакше пов'язаних з ігровою індустрією, від ігрових приставок всіх моделей до аксесуарів та аудіотехніки. Наш магазин для геймерів реалізує величезну кількість гаджетів та товарів від провідних світових виробників. Тут ви завжди знайдете те, що шукаєте для себе чи на подарунок. Ми пропонуємо вигідні ціни та 100% оригінальну продукцію.
                    </p>
                </div>
            </div>
            <div className={styles["benefits-card"]}>
                <div className={styles["benefits-card-media"]}>
                    <img className={styles["benefits-card-img"]} src={products} alt="" />
                </div>
                <div className={styles["benefits-card-content"]}>
                    <h3 className={styles["benefits-card-title"]}>Всі види товарів для геймерів в інтернет-магазині Up2Date</h3>
                    <p className={styles["benefits-card-description"]}>
                        У нашому інтернет-магазині електроніки ви знайдете те, що вам потрібно. Ми постійно оновлюємо наші каталоги та привозимо найгарячіші новинки. Також ми не забуваємо і про любителів класики і навіть ретро – тому в наших каталогах присутні також ретро-ігри, настільні ігри, ретро-консолі та ін. Так, у Up2Date ви можете придбати наступні категорії товарів:
                    </p>
                    <ul className={styles["benefits-card-list"]}>
                        <li className={styles["benefits-card-item"]}>Ігрові консолі;</li>
                        <li className={styles["benefits-card-item"]}>Портативні ігрові приставки;</li>
                        <li className={styles["benefits-card-item"]}>Контролери для приставок;</li>
                        <li className={styles["benefits-card-item"]}>Бандли (приставки з іграми);</li>
                        <li className={styles["benefits-card-item"]}>Відеоігри на фізичних носіях (дисках та картриджах) та у вигляді ваучерів (ключів) на скачування;</li>
                        <li className={styles["benefits-card-item"]}>Девайси для ігор у віртуальній реальності (PlayStation VR);</li>
                        <li className={styles["benefits-card-item"]}>Різноманітні аксесуари (чохли, кейси, кабелі, захисне скло, карти пам'яті та ін.);</li>
                        <li className={styles["benefits-card-item"]}>Настільні ігри;</li>
                        <li className={styles["benefits-card-item"]}>Колекційні видання та фігурки, та багато іншого.</li>
                    </ul>
                    <p className={styles["benefits-card-description"]}>
                        Ми постачаємо лише оригінальні товари від провідних виробників: Sony, Nintendo, Microsoft, Hori та інших. Кожен виріб супроводжується гарантійним талоном.
                    </p>
                    <p className={styles["benefits-card-description"]}>
                        Також на сайті Up2Date ви можете придбати підписки на ігрові сервіси: Steam, EA Pass, PlayStation Plus, Game Pass для Xbox, і т.д. Ваучери на ці підписки можна використати самостійно або купити на подарунок другові-геймеру – від такого презенту точно не відмовиться ніхто!
                    </p>
                    <p className={styles["benefits-card-description"]}>
                        Крім товарів, безпосередньо пов'язаних з геймінгом, ми також пропонуємо інші види техніки, такі як електротранспорт, графічні планшети, криптогаманці, квадрокоптери, 3D-ручки та інші аксесуари. Все це ви можете придбати на Up2Date буквально на кілька кліків.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Benefits;