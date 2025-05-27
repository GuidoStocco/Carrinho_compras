import { React, createContext, useState} from 'react';

export const CartContext = createContext();


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addCartItem(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if(indexItem !== -1){
            cart[indexItem].amount += 1;
            cart[indexItem].total = cart[indexItem].amount * cart[indexItem].price;
            setCart(cart);
            
            totalResultCart(cart);
            return;
        }
        
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data]);
    }

    function removeCartItem(product){
        const indexItem = cart.findIndex(item => item.id === product.id);
        if(cart[indexItem]?.amount > 1){
            cart[indexItem].amount -= 1;
            cart[indexItem].total = cart[indexItem].total - cart[indexItem].price;
            setCart(cart);
            totalResultCart(cart);
            return;
        }
        const removeCart = cart.filter(item => item.id !== product.id);
        setCart(removeCart);
        totalResultCart(removeCart);
    }

    function totalResultCart(items){
        const myCart = items;
        const result = myCart.reduce((acc, obj) => acc + obj.total, 0);
        setTotal(result.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
       }));
    }
    return(
        <CartContext.Provider value={{cart, addCartItem, removeCartItem, total}}>
            {children}
        </CartContext.Provider>
    )
}
