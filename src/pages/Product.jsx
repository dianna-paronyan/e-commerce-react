import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

function Product() {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res[0]);
      });
  }, []);

  async function addToCart(id, image, name, price, description, quantity) {
    try {
      const response = await fetch("http://localhost:3002/createProduct", {
        method: "POST",
        body: JSON.stringify({
          product_id: id,
          image,
          name,
          price,
          description,
          quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      console.log(data, "data");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="prod_box">
      {productData ? (
        <div className="product_box">
          <img src={productData.image} className="image" />
          <div className="text_box">
            <h4>{productData.name}</h4>
            <p>{productData.description}</p>
            <p>{productData.price} AMD</p>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                addToCart(
                  productData.id,
                  productData.image,
                  productData.name,
                  productData.price,
                  productData.description,
                  productData.quantity
                );
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Product;
