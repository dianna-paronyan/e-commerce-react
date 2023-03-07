import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Product from "../pages/Product";
import CartProvider from "../Provider/CartProvider";
import CartItems from "../pages/CartItems";
import About from "../pages/About";
import { useState } from "react";

function MyRoutes() {
  
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/shoppingCart/cartProducts" element={<CartItems />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default MyRoutes;
