import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { getProducts } from "../FetchData";
import { useCartItems } from "../Provider/CartProvider";
import "./Home.css";

function Home() {
  const [productsData, setProductsData] = useState([]);
  const { addToCart } = useCartItems();

  useEffect(() => {
    getProducts().then((res) => {
      setProductsData(res);
    });
  }, []);

  return (
    <>
      <Carousel />
      <h2>OUR BEST SELLERS</h2>
      <div className="container">
        {productsData.map((el) => {
          return (
            <div key={el.id} className="">
              <Link to={`/${el.id - 1}`}>
                <div className="card">
                  <img src={el.image} alt="" className="images" />
                  <div className="text_box">
                    <h4>{el.name}</h4>
                    <p>{el.price} AMD</p>
                    <p>{el.description}</p>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(el, el.id);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
