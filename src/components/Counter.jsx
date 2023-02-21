

function Counter({num,setCart,cart,id,removeCartItem}) {

    function counter1(type){
        const existItem = cart.find((pr)=> pr.id === id);
        if(type === 'inc'){
            if(existItem){
                const newItem = cart.map((el)=> el.id === id ? {...existItem, quantity:existItem.quantity + 1} : el)
                setCart(newItem);
            }
        }else if(type === 'dec'){
            if(num <= 1){
                removeCartItem(existItem.id);
                return;
            }
            if(existItem){
                const newItem = cart.map((el)=> el.id === id ? {...existItem, quantity:existItem.quantity - 1} : el)
                setCart(newItem);
            }
        }
      }
  return (
    <div>
      <button onClick={() => counter1("dec")} style={{width:'20px',height:'20px',cursor:'pointer'}}>-</button>
      <span style={{margin:'4px'}}>{num}</span>
      <button onClick={() => counter1("inc")} style={{width:'20px',height:'20px',cursor:'pointer'}}>+</button>
    </div>
  );
}

export default Counter;
