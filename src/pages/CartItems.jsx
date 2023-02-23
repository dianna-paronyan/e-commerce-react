import Counter from "../components/Counter";
import { useCartItems } from "../Provider/CartProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartItem.css";

function CartItems() {
  const { cart, setCart } = useCartItems();

  function removeCartItem(id) {
    setCart(cart.filter((el) => el.id !== id));
  }

  return (
    <div className="content">
      <h1>Shopping Cart</h1>
      <div className="cart_box">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el) => {
              return (
                <tr className="row" key={el.id}>
                  <td className="desc">
                    <img src={el.image} alt="" />
                    <div>
                      <h4>{el.name}</h4>
                      <p>{el.description}</p>
                      <p
                        className="delete_icon"
                        onClick={() => removeCartItem(el.id)}
                      >
                        <DeleteIcon
                          sx={{ fontSize: "15px", color: "#3e3e3e" }}
                        />
                        Remove
                      </p>
                    </div>
                  </td>
                  <td>
                    <Counter
                      num={el.quantity}
                      id={el.id}
                      setCart={setCart}
                      cart={cart}
                      removeCartItem={removeCartItem}
                    />
                  </td>
                  <td>{el.price}AMD</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3 className="amount">
          Estimated Total is  {cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
        </h3>
      </div>
    </div>
  );
}

export default CartItems;
