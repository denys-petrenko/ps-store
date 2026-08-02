import styles from "./ProductPage.module.scss";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getMergedProduct } from "../../utils/product/getMergedProduct";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/ui/Loader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductNavigation from "./components/ProductNavigation/ProductNavigation";
import ProductDetails from "./components/productDetails/productDetails";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import BestOffers from "../Home/sections/Main/BestOffers/BestOffers";
import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";
import FloatingPurchaseCard from "./components/FloatingPurchaseCard/FloatingPurchaseCard";

import { fetchProduct } from "../../store/slices/productSlice";



const ProductPage = () => {
    const { productSlug } = useParams();
    const [activeTab, setActiveTab] = useState("about");
    const dispatch = useDispatch();
    const { product, isLoading, isError } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productSlug));
    }, [dispatch, productSlug])


    useEffect(() => {
        if (!product) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, {
            rootMargin: "-80px 0px -60% 0px",
            threshold: 0
        });

        const sections = document.querySelectorAll(".observe-section");
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();

    }, [product]);

    if (!product) {
        return <Loader />
    }

    if (isError) {
        return <h2>{isError}</h2>;
    }


    return (
        <section className={styles.productPage}>
            <Breadcrumbs />
            <ProductNavigation activeTab={activeTab} />
            <ProductDetails product={product} />
            <BestOffers />
            <ProductDescription product={product} isStickyMode={true} />
            <SubscriptionForm />
            {/* <FloatingPurchaseCard product={productData} showFloatingCard={showFloatingCard} /> */}
        </section >
    )
}

export default ProductPage;