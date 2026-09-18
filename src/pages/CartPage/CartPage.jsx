import styles from "./CartPage.module.scss";
import { useSelector } from "react-redux";
import CartModalOrder from "../../components/CartModal/CartOrder/CartModalOrder";
import { openCartModal } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const CartPage = () => {
    const { items } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { t } = useTranslation()

    const totalPrice = items.reduce((acc, item) => {
        const itemPrice = item.discount
            ? item.price - item.discount
            : item.price;

        return acc + itemPrice * item.quantity;
    }, 0);

    const totalQuantity = items.reduce((acc, cur) => acc + cur.quantity, 0);



    const [pickupStore, setPickupStore] = useState("zdolbunivska");
    const [novaPostCity, setNovaPostCity] = useState("Kyiv");
    const [deliveryMethod, setDeliveryMethod] = useState("pickup");


    return (
        <section className={styles.cart}>

            <div className={styles.delivery}>
                <div className={styles.headerBlock}>
                    <h2 className={styles.headerTitle}>
                        {t("cart.cart_page.delivery_title")}
                    </h2>
                    <button
                        className={styles.editBtn}
                        onClick={() => dispatch(openCartModal())}
                    >
                        {t("cart.cart_page.edit_btn")}
                    </button>
                </div>
                <div className={styles.orders}>
                    {items.map(item => <CartModalOrder key={item.id} item={item} isCartPage />)}
                </div>


                <form className={styles.deliveryForm}>
                    <h2 className={styles.title}>
                    {t("cart.cart_page.delivery_form.title")}
                    </h2>
                    <label className={styles.labelForm}>
                        <div className={styles.inputForm}>
                            <input
                                type="radio"
                                name="delivery"
                                value="pickup"
                                checked={deliveryMethod === "pickup"}
                                onChange={() => setDeliveryMethod("pickup")}
                            />
                            {t("cart.cart_page.delivery_form.pickup")}
                        </div>
                        <select
                            name="pickupStore"
                            id=""
                            value={pickupStore}
                            onChange={(e) => setPickupStore(e.target.value)}
                            className={`${styles.selectForm} ${deliveryMethod === "pickup" ? styles.active : ""}`}
                        >
                            <option value="zdolbunivska">13 Zdolbunivska St.</option>
                            <option value="sahaidachnoho">25 P. Sahaidachnoho St.</option>
                        </select>
                    </label>
                    <label className={styles.labelForm}>
                        <div className={styles.inputForm}>
                            <input
                                type="radio"
                                name="delivery"
                                value="nova-post"
                                checked={deliveryMethod === "nova-post"}
                                onChange={() => setDeliveryMethod("nova-post")}
                            />
                            {t("cart.cart_page.delivery_form.nova_post")}
                        </div>
                        <select
                            name=""
                            id=""
                            value={novaPostCity}
                            onChange={(e) => setNovaPostCity(e.target.value)}
                            className={`${styles.selectForm} ${deliveryMethod === "nova-post" ? styles.active : ""}`}
                        >
                            <option value="Kyiv">Kyiv</option>
                            <option value="Poltava">Poltava</option>
                            <option value="Odesa">Odesa</option>
                        </select>
                    </label>
                    <label className={styles.labelForm}>
                        <div className={styles.inputForm}>
                            <input
                                type="radio"
                                name="delivery"
                                value="nova-post-address"
                                checked={deliveryMethod === "nova-post-address"}
                                onChange={() => setDeliveryMethod("nova-post-address")}
                            />
                            {t("cart.cart_page.delivery_form.nova_post_address")}
                        </div>
                    </label>
                </form>


            </div>

            <div className={styles.orderSummary}>
                <div className={styles.headerBlock}>
                    <h2 className={styles.headerTitle}>
                        {t("cart.cart_page.summary_title")}
                    </h2>
                    <button
                        className={styles.editBtn}
                        onClick={() => dispatch(openCartModal())}
                    >
                        {t("cart.cart_page.edit_btn")}
                    </button>
                </div>
                <div className={styles.totalOrder}>
                    <div className={styles.orderDetails}>
                        <dl className={styles.detailsList}>
                            <div className={styles.detailItem}>
                                <dt>
                                    {t("cart.cart_page.total_order.details_list.products")}
                                </dt>
                                <dd>{totalQuantity} {t("cart.cart_page.total_order.details_list.quantity")}</dd>
                            </div>
                            <div className={styles.detailItem}>
                                <dt>
                                    {t("cart.cart_page.total_order.details_list.products_total")}
                                </dt>
                                <dd>{totalPrice.toLocaleString("uk-UA")} ₴</dd>
                            </div>
                            <div className={styles.detailItem}>
                                <dt>
                                    {t("cart.cart_page.total_order.details_list.delivery.title")}
                                </dt>
                                <dd>
                                    {t("cart.cart_page.total_order.details_list.delivery.cost")}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className={styles.orderDetails}>
                        <p className={styles.totalPrice}>
                            <span>
                                {t("cart.cart_page.total_price.title")}:
                            </span>
                            <span>{totalPrice.toLocaleString("uk-UA")} ₴</span>
                        </p>
                        <button className={styles.orderBtn}>
                            {t("cart.cart_page.total_price.total_btn")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage;