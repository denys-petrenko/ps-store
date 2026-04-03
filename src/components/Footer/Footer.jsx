import styles from "./Footer.module.scss";
import footerLogo from "../../assets/footer/footer-logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import youtube from "../../assets/footer/youtube.svg";
import twitter from "../../assets/footer/twitter.svg";
import google from "../../assets/footer/google.svg";
import { useTranslation } from "react-i18next";

const objectWithoutTitle = (obj) => {
    return Object.entries(obj).filter(([key]) => key !== "title");
}

const Footer = () => {
    const { t } = useTranslation();
    const { nav, contacts } = t("footer", { returnObjects: true });

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
                        <a href="#" className={styles["footer-socials-link"]}>
                            <img src={twitter} alt="Twitter" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                    <li className={styles["footer-socials-item"]}>
                        <a href="#" className={styles["footer-socials-link"]}>
                            <img src={google} alt="Google" className={styles["footer-socials-img"]} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles["footer-nav"]}>
                {Object.entries(nav)
                    .map(([key, value]) => (
                        <div key={key} className={styles["footer-nav-section"]}>
                            <h3 className={styles["footer-nav-section-title"]}>{value.title}</h3>
                            <ul className={styles["footer-nav-list"]}>
                                {
                                    value.links
                                        .map((link) => (
                                            <li key={link} className={styles["footer-nav-item"]}>{link}</li>
                                        ))
                                }
                            </ul>
                        </div>
                    ))}
            </div>
            <div className={styles["footer-contacts"]}>
                <div className={styles["footer-contacts-section"]}>
                    <h3 className={styles["footer-contacts-section-title"]}>{contacts.addresses.title}</h3>
                    <ul className={styles["footer-contacts-list"]}>
                        {
                            objectWithoutTitle(contacts.addresses)
                                .map(([key, value]) => (
                                    <li key={key} className={styles["footer-contacts-item"]}>{value}</li>
                                ))
                        }
                    </ul>
                </div>
                <div className={styles["footer-contacts-section"]}>
                    <h3 className={styles["footer-contacts-section-title"]}>{contacts.opening_hours.title}</h3>
                    <dl className={styles["footer-schedule"]}>
                        {
                            objectWithoutTitle(contacts.opening_hours)
                                .map(([key, value]) => (
                                    <div key={key} className={styles["footer-schedule-row"]}>
                                        <dt className={styles["footer-schedule-date"]}>{value.title}</dt>
                                        <dd className={styles["footer-schedule-time"]}>{value.hours}</dd>
                                    </div>
                                ))
                        }
                    </dl>
                </div>
            </div>
        </footer>
    )
}

export default Footer;