import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";
import GameReviews from "./pages/GameReviews/GameReviews";
import DeliveryPayment from "./pages/DeliveryPayment/DeliveryPayment";
import About from "./pages/About/About";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/ps-store/contacts" element={<Contacts />} />
        <Route path="/ps-store/game-reviews" element={<GameReviews />} />
        <Route path="ps-store/delivery-payment" element={<DeliveryPayment />} />
        <Route path="ps-store/about-us" element={<About />} />
        <Route path="/ps-store" element={<Home />} />
        <Route path="/ps-store/products" element={<Products />} />
      </Route>
    </Routes>

  )
}

export default App
