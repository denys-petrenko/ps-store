import styles from "./ProductPage.module.scss";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getMergedProduct } from "../../utils/product/getMergedProduct";

import Loader from "../../components/ui/Loader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductNavigation from "./components/ProductNavigation/ProductNavigation";
import ProductDetails from "./components/productDetails/productDetails";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import BestOffers from "../Home/sections/Main/BestOffers/BestOffers";
import SubscriptionForm from "../Home/sections/SubscriptionForm/SubscriptionForm";
import FloatingPurchaseCard from "./components/FloatingPurchaseCard/FloatingPurchaseCard";



const ProductPage = () => {
    const { productSlug } = useParams();
    const [activeTab, setActiveTab] = useState("about");
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await getMergedProduct(productSlug);
                setProductData(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadProduct();
    }, [productSlug])



    useEffect(() => {
        if (!productData) return;

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

    }, [productData]);


    if (!productData) {
        return <Loader />
    }

    return (
        <section className={styles.productPage}>
            <Breadcrumbs />
            <ProductNavigation activeTab={activeTab} />
            <ProductDetails product={productData} />
            <BestOffers />
            <ProductDescription product={productData} isStickyMode={true} />
            <SubscriptionForm />
            {/* <FloatingPurchaseCard product={productData} showFloatingCard={showFloatingCard} /> */}
        </section >
    )
}

export default ProductPage;