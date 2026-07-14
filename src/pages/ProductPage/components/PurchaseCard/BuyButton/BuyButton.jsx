import styles from "./BuyButton.module.scss";
import { useTranslation } from "react-i18next";
import basket from "../../../../../assets/card/shopping-cart.svg";

const BuyButton = ({ isStickyMode }) => {
    const { t } = useTranslation();

    return (
        <button className={`${styles.buyButton} ${isStickyMode ? styles.float : ""}`}>
            <img src={basket} alt="Basket" />
            {t("product_card.buy-button")}
        </button>
    )
}

export default BuyButton;