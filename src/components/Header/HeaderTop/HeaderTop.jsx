import HeaderBtn from "./HeaderBtn";
import logo from "../../../assets/ps-store-logo.png";
import cityCall from "../../../assets/header/city-call.svg";
import lifecell from "../../../assets/header/life-call.svg";
import kyivstar from "../../../assets/header/kyivstar-call.svg";
import vodafone from "../../../assets/header/vodafone-call.svg";
import styles from "./HeaderTop.module.scss";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";


const HeaderTop = () => {
    const { t } = useTranslation();
    const menuList = t("header.menu", { returnObjects: true });

    return (
        <div className={styles["header-top"]}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <NavLink to={"/ps-store/"} className={styles["logo-link"]} >
                        <img className={styles["logo-link-img"]} src={logo} title="Ваш магазин" alt="Ваш магазин" />
                    </NavLink>
                </div>
                <div className={styles.menu}>
                    <ul className={styles["menu-list"]}>
                        {
                            menuList
                                .map(item => (
                                   
                                    <NavLink
                                        to={item.path}
                                        key={item.label.toLowerCase()}
                                        className={({ isActive }) =>
                                            isActive ? `${styles["menu-list-item"]} ${styles.active}` : styles["menu-list-item"]
                                        } >
                                        {item.label}
                                    </NavLink>
                                ))

                        }
                    </ul>
                </div>
                <div className={styles.phones}>
                    <ul className={styles["phones-list"]}>
                        <li className={styles["phones-list-item"]}>
                            <a href="tel:+380443337007" className={styles["phone-link"]}>
                                <img src={cityCall} alt="Phone City" className={styles.icon} />
                                (044) 333 70 07
                            </a>
                        </li>
                        <li className={styles["phones-list-item"]}>
                            <a href="tel:+380672902060" className={styles["phone-link"]}>
                                <img src={lifecell} alt="Phone Lifecell" className={styles.icon} />
                                (073) 001 30 50
                            </a>
                        </li>
                        <li className={styles["phones-list-item"]}>
                            <a href="tel:+380672902060" className={styles["phone-link"]}>
                                <img src={kyivstar} alt="Phone Kyivstar" className={styles.icon} />
                                (067) 290 20 60
                            </a>
                        </li>
                        <li className={styles["phones-list-item"]}>
                            <a href="tel:+380990013050" className={styles["phone-link"]}>
                                <img src={vodafone} alt="Phone Vodafone" className={styles.icon} />
                                (099) 001 30 50
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <HeaderBtn />
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;