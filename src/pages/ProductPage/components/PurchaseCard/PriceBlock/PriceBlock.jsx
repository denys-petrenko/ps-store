import styles from "./PriceBlock.module.scss";


const PriceBlock = ({ product, isStickyMode, variant = "default" }) => {
    const hasDiscount = product.discount > 0;

    const discountPercent = hasDiscount
        ? Math.round((product.discount / product.price) * 100)
        : 0;

    const discountLabel = variant === "cart"
        ? `-${discountPercent}%`
        : `-${product.discount} ₴`;

    const basePrice = hasDiscount
        ? product.price - product.discount
        : product.price;

    const finalPrice = variant === "cart"
        ? basePrice * product.quantity
        : basePrice;

    return (
        <div className={`${styles.priceBox} ${styles[variant]}`}>
            {hasDiscount && (
                <div className={styles.discountBox}>
                    <del className={`${styles.oldPrice} ${isStickyMode ? styles.float : ""}`}>
                        {product.price} ₴
                    </del>
                    <span className={`${styles.discount} ${!isStickyMode ? styles.float : ""}`}>
                        {discountLabel}
                    </span>
                </div>
            )}
            <span className={`${styles.price} ${isStickyMode ? styles.float : ""}`}>
                {finalPrice} ₴
            </span>
        </div>
    )
}

export default PriceBlock;