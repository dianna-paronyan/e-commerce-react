import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}){
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    console.log(cart)
    function addToCart(product){
        setCart([...cart, product]);
    }

    return(
        <CartContext.Provider value={{cart,setCart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartItems(){
    return useContext(CartContext);
}

