import { useCartItems } from "../Provider/CartProvider";
import "./CartItem.css";

function CardItem() {
  const { cart, setCart } = useCartItems();

  function removeCartItem(id) {
    setCart(cart.filter((el) => el.id !== id));
  }

  return (
    <>
      <h1>Cart Items</h1>
      <div className="cart_box">
        {cart?.map((el) => {
          return (
            <div key={el.id} className="cards_of_cart">
              <img src={el.image} alt="" />
              <h4>{el.name}</h4>
              <p>{el.price}</p>
              <button onClick={() => removeCartItem(el.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardItem;
