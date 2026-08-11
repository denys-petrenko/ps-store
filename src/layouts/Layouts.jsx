import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartModal from "../components/CartModal/CartModal";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartModal />
            <Footer />
        </>
    )
}

export default Layout;