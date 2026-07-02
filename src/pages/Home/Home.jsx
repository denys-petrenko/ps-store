import Slider from "./sections/Slider/Slider";
import Main from "./sections/Main/Main";
import SubscriptionForm from "./sections/SubscriptionForm/SubscriptionForm";
import Benefits from "./sections/Benefits/Benefits";

import { getFavoritesProducts } from "../../api/favoritesApi";
import { useEffect, useState } from "react";


const Home = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    console.log(favoriteProducts);
    useEffect(() => {
        const loadFavoriteProducts = async () => {
            const data = await getFavoritesProducts();

            setFavoriteProducts(data.map(el => el.images[0]));
        }
        loadFavoriteProducts();
    }, [])

    return (
        <>
            <Slider variant={"home"} autoplay={true} data={favoriteProducts} />
            <Main />
            <SubscriptionForm />
            <Benefits />
        </>
    )
}

export default Home;