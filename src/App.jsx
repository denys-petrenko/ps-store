import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import Contacts from "./pages/Contacts/Contacts";
import GameReviews from "./pages/GameReviews/GameReviews";
import DeliveryPayment from "./pages/DeliveryPayment/DeliveryPayment";
import About from "./pages/About/About";
import ProductPage from "./pages/ProductPage/ProductPage";
import PersistStore from "./components/PersistStore/PersistStore";

function App() {

  return (
    <>
      <PersistStore />
      <Routes>
        <Route element={<Layout />}>
          <Route path="ps-store/contacts" element={<Contacts />} />
          <Route path="ps-store/game-reviews" element={<GameReviews />} />
          <Route path="ps-store/delivery-payment" element={<DeliveryPayment />} />
          <Route path="ps-store/about-us" element={<About />} />
          <Route path="/ps-store/" element={<Home />} />
          <Route path="ps-store/:categoryId" element={<CategoryPage />} />
          <Route path="ps-store/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
          <Route path="ps-store/:categoryId/:subCategoryId/:productSlug" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;