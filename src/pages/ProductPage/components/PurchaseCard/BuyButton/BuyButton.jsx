import styles from "./BuyButton.module.scss";
import { useTranslation } from "react-i18next";
import basket from "../../../../../assets/card/shopping-cart.svg";
import { addToCart, openCartModal } from "../../../../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Check } from "lucide-react";

const BuyButton = ({ product, isStickyMode }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const inCart = cart.items.some(item => item.id === product.id);

    const addProductToCart = (item) => {
        dispatch(openCartModal());
        dispatch(addToCart(item));
    }

    return (
        <button
            className={`${styles.buyButton} ${isStickyMode ? styles.float : ""}`}
            onClick={() => {
                addProductToCart(product);
            }}
        >
            {
                inCart
                    ? <>
                        <Check />
                        {t("product_card.buy_button.added")}
                    </>
                    : <>
                        <img src={basket} alt="Basket" />
                        {t("product_card.buy_button.add")}
                    </>
            }
        </button >
    )
}

export default BuyButton;