import styles from "./PriceBlock.module.scss";


const PriceBlock = ({ product, isStickyMode }) => {
    const hasDiscount = product?.discount > 0;
    const finalPrice = product?.price - product?.discount;

    return (
        <div className={styles.priceBox}>
            {hasDiscount && (
                <div className={styles.discountBox}>
                    <del className={`${styles.oldPrice} ${isStickyMode ? styles.float : ""}`}>
                        {product?.price} ₴
                    </del>
                    <span className={`${styles.discount} ${!isStickyMode ? styles.float : ""}`}>
                        -{product?.discount} ₴
                    </span>
                </div>
            )}
            <span className={`${styles.price} ${isStickyMode ? styles.float : ""}`}>
                {hasDiscount ? finalPrice : product?.price} ₴
            </span>
        </div>
    )
}

export default PriceBlock;