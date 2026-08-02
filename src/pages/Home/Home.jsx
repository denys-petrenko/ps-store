import Slider from "./sections/Slider/Slider";
import Main from "./sections/Main/Main";
import SubscriptionForm from "./sections/SubscriptionForm/SubscriptionForm";
import Benefits from "./sections/Benefits/Benefits";
import { useEffect, useState } from "react";


import { getBanners } from "../../api/bannersApi";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        const loadBannerProduct = async () => {
            const data = await getBanners();
            setFavoriteProducts(data.map(el => el));
        }

        loadBannerProduct();
    }, [])

    return (
        <>
            <Slider
                variant={"home"}
                autoplay={true}
                data={favoriteProducts}
                onSlideClick={(banner) => navigate(banner.link)}
            />
            <Main />
            <SubscriptionForm />
            <Benefits />
        </>
    )
}

export default Home;