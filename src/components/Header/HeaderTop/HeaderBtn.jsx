import Phone from "../../../assets/header/icon-phone.svg";
import styles from "./HeaderBtn.module.scss";

const HeaderBtn = () => {
    return (
        <button className={styles["header-btn-contact"]}>
            <img src={Phone} alt="" className={styles["contact-phone"]} />
        </button>
    )
}

export default HeaderBtn;