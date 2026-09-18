import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const hideBottom = pathname === "/ps-store/cart";

    return (
        <header className={styles.header}>
            <HeaderTop />
            {!hideBottom && <HeaderBottom />}
        </header>
    )
}

export default Header;