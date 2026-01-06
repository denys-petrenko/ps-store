import "./Header.scss";
import logo from "../../assets/ps-store-logo.png";
import HeaderBtn from "./HeaderBtn";
import cityCall from "../../assets/header/city-call.svg";
import lifecell from "../../assets/header/life-call.svg";
import kyivstar from "../../assets/header/kyivstar-call.svg";
import vodafone from "../../assets/header/vodafone-call.svg";
import catalogBtn from "../../assets/header/header-catalog-btn.svg";
import searchBtn from "../../assets/header/search.svg";
import profile from "../../assets/header/profile.svg";
import favorites from "../../assets/header/favorites.svg";
import cart from "../../assets/header/cart.svg";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                            <a href="">
                                <img src={logo} title="Ваш магазин" alt="Ваш магазин" />
                            </a>
                        </div>
                        <div className="phones">
                            <ul className="phones-list">
                                <li>
                                    <a href="tel:+380443337007">
                                        <img src={cityCall} alt="Phone City" className="svg-icon" />
                                        (044) 333 70 07
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+380672902060">
                                        <img src={lifecell} alt="Phone Lifecell" className="svg-icon" />
                                        (073) 001 30 50
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+380672902060">
                                        <img src={kyivstar} alt="Phone Kyivstar" className="svg-icon" />
                                        (067) 290 20 60
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+380990013050">
                                        <img src={vodafone} alt="Phone Vodafone" className="svg-icon" />
                                        (099) 001 30 50
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contacts">
                            <div className="btn-group">
                                <HeaderBtn />
                            </div>
                            <div className="dropdown-menu">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <nav className="dropdown-menu">
                        <button className="btn-dropdown-catalog">
                            <img src={catalogBtn} alt="" />
                            Catalog
                        </button>
                    </nav>

                    <div className="header-searcher">
                        <input type="text" name="search" placeholder="Search" className="search-input" />
                        <button className="header-searcher-btn">
                            <img src={searchBtn} alt="" className="search-logo" />
                        </button>
                    </div>

                    <div className="header-actions">
                        <div className="header-icons">
                            <a href="" className="header-icon">
                                <img src={profile} alt="" />
                            </a>
                            <a href="" className="header-icon">
                                <img src={favorites} alt="" />
                            </a>
                            <a href="" className="header-icon">
                                <img src={cart} alt="" />
                            </a>
                        </div>
                        <div className="language-switcher">
                            <button className="language-select">
                                UA
                            </button>
                            <button className="language-select">
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;