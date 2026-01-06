import "./HeaderBtn.scss";
import Phone from "../../assets/header/icon-phone.svg";

const HeaderBtn = () => {
    return (
        <>
            <button className="header-btn-contact">
                <img src={Phone} alt="" className="contact-phone" />
            </button>
        </>

    )
}

export default HeaderBtn;