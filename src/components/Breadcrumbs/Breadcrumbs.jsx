import styles from "./Breadcrumbs.module.scss";
import { useLocation, NavLink } from "react-router-dom";


const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);
    const lastPath = paths.length - 1;

    const forrmatLabel = (str) => {
        return str
            .split("-")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ")
    }

    return (
        <div className={styles.breadcrumbsWrapper}>
            <ul className={styles.breadcrumbs}>
                {paths.map((path, i) => {
                    const route = paths
                        .slice(0, i + 1)
                        .reduce((acc, cur) => acc += `/${cur}`);

                    return (
                        <li key={route}>
                            {
                                i === lastPath
                                    ? <span className={styles.disabled}>{forrmatLabel(path)}</span>
                                    : <NavLink to={`/${route}`} className={styles.path}>{forrmatLabel(path)}</NavLink>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Breadcrumbs;