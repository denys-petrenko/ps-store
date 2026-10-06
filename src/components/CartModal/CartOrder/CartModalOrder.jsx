import styles from "./CartModalOrder.module.scss";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../../store/slices/cartSlice";
import { Trash, Plus, Minus } from "lucide-react";
import PriceBlock from "../../../pages/ProductPage/components/PurchaseCard/PriceBlock/PriceBlock";
import FavoriteBtn from "../../../pages/ProductPage/components/PurchaseCard/FavoriteBtn/FavoriteBtn";
import { Link } from "react-router-dom";
import { useProductPath } from "../../../hooks/useProductPath";


const CartModalOrder = ({ item, isCartPage }) => {
    const dispatch = useDispatch();
    const path = useProductPath(item);

    const handleIncrease = (item) => {
        dispatch(increaseQuantity(item));
    }

    const handleDecrease = (item) => {
        dispatch(decreaseQuantity(item));
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    }

    return (

        <div className={styles.order} >
            <div className={styles.orderImage}>
                <Link to={path}>
                    <img src={item.images[0]} alt={item.name} />
                </Link>
            </div>
            <div className={styles.about}>
                <h3 className={styles.title}>
                    <Link to={path}>
                        {item.name}
                    </Link>
                </h3>
                <div className={styles.price}>
                    {
                        isCartPage
                            ? <span>Quantity: {item.quantity}</span>
                            : <div className={styles.counter}>
                                <button
                                    className={styles.counterBtn}
                                    onClick={() => handleDecrease(item)}
                                >
                                    <Minus size={18} />
                                </button>
                                <span >{item.quantity}</span>
                                <button
                                    className={styles.counterBtn}
                                    onClick={() => handleIncrease(item)}
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                    }
                    <PriceBlock product={item} isStickyMode={true} variant="cart" />
                </div>
            </div>
            <div className={`${styles.actions} ${isCartPage ? "" : styles.active}`}>
                <FavoriteBtn product={item} variant="cart" />
                <Trash
                    className={styles.trash}
                    onClick={() => handleRemoveFromCart(item)}
                />
            </div>
        </div>
    )
}

export default CartModalOrder;