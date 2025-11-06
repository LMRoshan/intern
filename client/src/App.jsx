import "./App.css";
import "flowbite";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import SingleProd from "./pages/SingleProd";
import Drawer from "./pages/Drawer";
import Register from "./pages/Register";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import ProductAdmin from "./admin/ProductAdmin";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/shop/:id" exact element={<SingleProd />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/account" exact element={<Account />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/drawer" exact element={<Drawer />} />
        <Route path="/admin" exact element={<Dashboard />} />
        <Route path="/addProd" exact element={<AddProduct />} />
        <Route path="/adminProd" exact element={<ProductAdmin />} />
        <Route path="/underconstruction" exact element={<UnderConstruction />} />
      </Routes>
    </>
  );
}

export default App;
