import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss"; 

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}

export default Header;