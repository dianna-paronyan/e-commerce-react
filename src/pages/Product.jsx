import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../FetchData";
import "./Product.css";

function Product() {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts().then((res) => {
      setProductData(res[id]);
    });
  }, [id, productData]);

  return (
    <div className="prod_box">
      {productData ? (
        <div className="product_box">
          <img src={productData.image} className="image" />
          <div className="text_box">
            <h4>{productData.name}</h4>
            <p>{productData.description}</p>
            <p>{productData.price} AMD</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Product;
