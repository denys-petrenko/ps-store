import styles from "./ProductNavigation.module.scss";
import { useTranslation } from "react-i18next";


const ProductNavigation = ({ activeTab }) => {
    const { t } = useTranslation();
    const navigationList = t("product_card.navigation", { returnObjects: true });

    const scrollToSection = (id) => {
        document.getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth"
            })
    }

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationWrapper}>
                {Object.entries(navigationList).map(([key, value]) => (
                    <li key={key} className={styles.navigationItem}>
                        <button
                            className={`${styles.navigationBtn} ${activeTab === key ? styles.active : ""}`}
                            onClick={() => scrollToSection(key)}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default ProductNavigation;