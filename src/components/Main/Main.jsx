import styles from "./Main.module.scss";
import Advantage from "../Advantage/Advantage";
import Favourites from "../Favourites/Favourites";
import BestOffers from "../BestOffers/BestOffers";
import LastArticles from "../LastArticles/LastArticles";

const Main = () => {
    return (
        <main className={styles.main}>
            <Advantage />
            <Favourites />
            <BestOffers />
            <LastArticles />
        </main>
    )
}

export default Main;