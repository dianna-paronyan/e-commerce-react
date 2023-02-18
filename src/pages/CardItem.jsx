import { useCartItems } from "../Provider/CartProvider"

function CardItem() {
  const {cart,setCart} = useCartItems();

  function removeCartItem(id){
    setCart(cart.filter((el)=>el.id !== id))
  }

  return (
    <div>
      CardItem
      {cart?.map((el)=>{
        return(
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h4>{el.name}</h4>
            <p>{el.price}</p>
            <button onClick={()=>removeCartItem(el.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default CardItem