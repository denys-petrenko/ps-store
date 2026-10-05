import styles from "./SearchResultCard.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../../../assets/ps-store-logo.png";



const SearchResultCard = ({ item, onClick, parentCategoryMap }) => {


    return (
        <Link
            to={`/ps-store/${parentCategoryMap.get(item.category)}/${item.category}/${item.slug}`}
            className={styles.link}
            onClick={onClick}
        >
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={item.images?.[0] || Logo}
                        alt={item.name}
                    />
                </div>
                <div className={styles.about}>
                    <p className={styles.title}>{item.name}</p>
                    <div className={styles.price}>
                        {item.discount
                            ? <>
                                <span className={styles.oldPrice}>{item.price.toLocaleString("uk-UA")} ₴</span>
                                <span className={styles.currentPrice}>{(item.price - item.discount).toLocaleString("uk-UA")} ₴</span>
                            </>
                            : <span className={styles.currentPrice}>
                                {item.price.toLocaleString("uk-UA")} ₴
                            </span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchResultCard;