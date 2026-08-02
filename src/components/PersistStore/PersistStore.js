import { useEffect } from "react";
import { useSelector } from "react-redux";

const PersistStore = () => {
    const cart = useSelector(state => state.cart.items);
    const favorites = useSelector(state => state.favorites.items);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [cart, favorites]);

    return null;
}

export default PersistStore;