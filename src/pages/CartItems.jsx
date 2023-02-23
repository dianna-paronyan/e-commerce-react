import Counter from "../components/Counter";
import { useCartItems } from "../Provider/CartProvider";
import "./CartItem.css";

function CartItems() {
  const { cart, setCart } = useCartItems();

  function removeCartItem(id) {
    setCart(cart.filter((el) => el.id !== id));
  }
  console.log(cart)

  return (
    <div className="content">
      <h1>Cart Items</h1>
      <div className="cart_box">
        {cart?.map((el) => {
          return (
            <div key={el.id} className="cards_of_cart">
              <img src={el.image} alt="" />
              <h4>{el.name}</h4>
              <p>{el.price}</p>
              <button onClick={() => removeCartItem(el.id)} className='del_btn'>Delete</button>
              <Counter num={el.quantity} id={el.id} setCart={setCart} cart={cart} removeCartItem={removeCartItem} /> 
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartItems;
