import styles from "./Footer.module.scss";
import footerLogo from "../../assets/footer/footer-logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import youtube from "../../assets/footer/youtube.svg";
import twitter from "../../assets/footer/twitter.svg";
import google from "../../assets/footer/google.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-logo"]}>
                <div className={styles["footer-logo-container"]}>
                    <img src={footerLogo} alt="Logo" className={styles["footer-logo-img"]} />
                </div>
            </div>
            <div className={styles["footer-socials"]}>
                <ul className={styles["footer-socials-list"]}>
                    <li className={styles["footer-socials-item"]}>
                        <a href="https://facebook.com" className={styles["footer-socials-link"]}>
                            <img src={facebook} alt="Facebook" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                    <li className={styles["footer-socials-item"]}>
                        <a href="https://youtube.com" className={styles["footer-socials-link"]}>
                            <img src={youtube} alt="Youtube" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                    <li className={styles["footer-socials-item"]}>
                        <a href="" className={styles["footer-socials-link"]}>
                            <img src={twitter} alt="Twitter" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                    <li className={styles["footer-socials-item"]}>
                        <a href="" className={styles["footer-socials-link"]}>
                            <img src={google} alt="Google" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles["footer-nav"]}>
                <div className={styles["footer-nav-section"]}>
                    <h2 className={styles["footer-nav-section-title"]}>Інформація</h2>
                    <ul className={styles["footer-nav-list"]}>
                        <li className={styles["footer-nav-item"]}>Доставка та оплата</li>
                        <li className={styles["footer-nav-item"]}>Про нас</li>
                    </ul>
                </div>
                <div className={styles["footer-nav-section"]}>
                    <h2 className={styles["footer-nav-section-title"]}>Служба підтримки</h2>
                    <ul className={styles["footer-nav-list"]}>
                        <li className={styles["footer-nav-item"]}>Контакти</li>
                        <li className={styles["footer-nav-item"]}>Повернення товару</li>
                        <li className={styles["footer-nav-item"]}>Карта сайту</li>
                    </ul>
                </div>
                <div className={styles["footer-nav-section"]}>
                    <h2 className={styles["footer-nav-section-title"]}>Додатково</h2>
                    <ul className={styles["footer-nav-list"]}>
                        <li className={styles["footer-nav-item"]}>Виробники</li>
                        <li className={styles["footer-nav-item"]}>Подарункові сертифікати</li>
                        <li className={styles["footer-nav-item"]}>Партнерська програма</li>
                        <li className={styles["footer-nav-item"]}>Акції</li>
                    </ul>
                </div>
                <div className={styles["footer-nav-section"]}>
                    <h2 className={styles["footer-nav-section-title"]}>Особистий кабінет</h2>
                    <ul className={styles["footer-nav-list"]}>
                        <li className={styles["footer-nav-item"]}>Особистий кабінет</li>
                        <li className={styles["footer-nav-item"]}>Історія замовлень</li>
                        <li className={styles["footer-nav-item"]}>Закладки</li>
                        <li className={styles["footer-nav-item"]}>Розсилка</li>
                    </ul>
                </div>
            </div>
            <div className={styles["footer-contacts"]}>
                <div className={styles["footer-contacts-section"]}>
                    <h2 className={styles["footer-contacts-section-title"]}>Адреса:</h2>
                    <ul className={styles["footer-contacts-list"]}>
                        <li className={styles["footer-contacts-item"]}>м.Київ</li>
                        <li className={styles["footer-contacts-item"]}>вул. П. Сагайдачного, 25</li>
                        <li className={styles["footer-contacts-item"]}>вул. Здолбунівська, 13</li>
                    </ul>
                </div>
                <div className={styles["footer-contacts-section"]}>
                    <h2 className={styles["footer-contacts-section-title"]}>Графік роботи</h2>
                    <dl className={styles["footer-schedule"]}>
                        <div className={styles["footer-schedule-row"]}>
                            <dt className={styles["footer-schedule-date"]}>Будні дні:</dt>
                            <dd className={styles["footer-schedule-time"]}>з 9 до 21 години</dd>
                        </div>
                        <div className={styles["footer-schedule-row"]}>
                            <dt className={styles["footer-schedule-date"]}>Субота-неділя:</dt>
                            <dd className={styles["footer-schedule-time"]}>з 10 до 20 годин</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </footer>
    )
}

export default Footer;