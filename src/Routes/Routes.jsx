import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../components/Layout";
import Product from "../pages/Product";

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MyRoutes;
