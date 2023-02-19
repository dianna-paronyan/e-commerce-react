import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../components/Layout";
import Product from "../pages/Product";
import CartProvider from "../Provider/CartProvider";
import CardItem from "../pages/CardItem";

function MyRoutes() {
  return (
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Product />} />
            <Route path="/cartItems" element={<CardItem />} />
          </Route>
        </Routes>
      </CartProvider>
  );
}

export default MyRoutes;
