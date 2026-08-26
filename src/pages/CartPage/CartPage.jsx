import styles from "./CartPage.module.scss";
import { useSelector } from "react-redux";

const CartPage = () => {
    const { items } = useSelector(state => state.cart);

    return (
        <section className={styles.cart}>
            {items.map(item => (
                <div>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </section>
    )
}

export default CartPage;