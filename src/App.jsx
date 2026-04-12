import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/ps-store/contacts" element={<Contacts />} />
        <Route path="/ps-store" element={<Home />} />
        <Route path="/ps-store/products" element={<Products />} />
      </Route>
    </Routes>

  )
}

export default App
