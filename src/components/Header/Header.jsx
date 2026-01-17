import styles from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";


const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}

export default Header;