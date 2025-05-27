import { React, createContext, useState} from 'react';

export const CartContext = createContext();


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addCartItem(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if(indexItem !== -1){
            cart[indexItem].amount += 1;
            cart[indexItem].total = cart[indexItem].amount * cart[indexItem].price;
            setCart(cart);
            console.log(cart);
            return;
        }
        
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(products => [...products, data]);
    }
    return(
        <CartContext.Provider value={{cart, addCartItem}}>
            {children}
        </CartContext.Provider>
    )
}
