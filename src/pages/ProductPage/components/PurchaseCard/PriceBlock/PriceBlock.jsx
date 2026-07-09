import styles from "./PriceBlock.module.scss";

const PriceBlock = ({ product, showFloatingCard }) => {
    const hasDiscount = product?.discount > 0;
    const finalPrice = product?.price - product?.discount;

    return (
        <div className={styles.priceBox}>
            {hasDiscount && (
                <div className={styles.discountBox}>
                    <del className={`${styles.oldPrice} ${showFloatingCard ? styles.float : ""}`}>
                        {product?.price} ₴
                    </del>
                    <span className={`${styles.discount} ${!showFloatingCard ? styles.float : ""}`}>
                        -{product?.discount} ₴
                    </span>
                </div>
            )}
            <span className={`${styles.price} ${showFloatingCard ? styles.float : ""}`}>
                {hasDiscount ? finalPrice : product?.price} ₴
            </span>
        </div>
    )
}

export default PriceBlock;