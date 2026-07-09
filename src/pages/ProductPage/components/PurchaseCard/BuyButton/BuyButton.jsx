import styles from "./BuyButton.module.scss";
import { useTranslation } from "react-i18next";
import basket from "../../../../../assets/card/shopping-cart.svg";

const BuyButton = ({showFloatingCard}) => {
    const { t } = useTranslation();

    return (
        // <button className={styles.buyButton}>
        <button className={`${styles.buyButton} ${showFloatingCard ? styles.float : ""}`}>
            <img src={basket} alt="Basket" />
            {t("product_card.buy-button")}
        </button>
    )
}

export default BuyButton;