import styles from "./CartModal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { closeCartModal } from "../../store/slices/cartSlice";
import { CircleX } from "lucide-react";
import { useEffect } from "react";
import CartModalOrder from "./CartOrder/CartModalOrder";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CartModal = () => {
    const { items, isModalOpen } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleClose = () => {
        dispatch(closeCartModal());
    };

    const totalPrice = items.reduce((acc, item) => {
        const itemPrice = item.discount
            ? item.price - item.discount
            : item.price;

        return acc + itemPrice * item.quantity;
    }, 0);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={handleClose}
        >
            <div
                className={styles.cartModal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.orderTitle}>
                    <h2>
                        {t("cart.cart_modal.order_title")}
                    </h2>
                    <button
                        className={styles.closeModalBtn}
                        onClick={handleClose}
                    >
                        <CircleX size={24} />
                    </button>
                </div>

                <div className={styles.orders}>
                    {items.map(item => <CartModalOrder key={item.id} item={item} />)}
                </div>

                <div className={styles.orderSummary}>
                    <div className={styles.orderTotal}>
                        <span className={styles.totalTitle}>
                            {t("cart.cart_modal.total_title")}
                        </span>
                        <span className={styles.totalPrice}>
                            {totalPrice} ₴
                        </span>
                    </div>
                    <Link
                        to="/ps-store/cart"
                        className={styles.orderSummaryBtn}
                        onClick={handleClose}
                    >
                        {t("cart.cart_modal.order_btn")}
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CartModal;