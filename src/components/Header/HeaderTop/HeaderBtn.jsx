import { useEffect, useRef, useState } from "react";
import phone from "../../../assets/header/city-call.svg";
import skype from "../../../assets/header/skype.svg";
import mail from "../../../assets/header/mail.svg";
import styles from "./HeaderBtn.module.scss";

const HeaderBtn = () => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickMenu(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("click", handleClickMenu);
        return () => document.removeEventListener("click", handleClickMenu);
    }, []);


    return (
        <div ref={ref}>
            <button className={styles["header-btn-contact"]} onClick={() => setShowMenu(prev => !prev)}>
                <img src={phone} alt="" className={styles["contact-phone"]} />
            </button>
            <ul className={`${styles["dropdown-menu"]} ${showMenu ? styles.active : ""}`}>
                <li>
                    <a href="tel:0800500600" className={styles["contact-link"]}>
                        <img src={phone} alt="" />
                        0 800 500 600
                    </a>
                </li>
                <li>
                    <a href="#" className={styles["contact-link"]}>
                        <img src={skype} alt="" />
                        up2date.com.ua
                    </a>
                </li>
                <li>
                    <a href="#" className={styles["contact-link"]}>
                        <img src={mail} alt="" />
                        office@up2date.com.ua
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderBtn;