import React, { createContext, useEffect, useState, useContext } from 'react'
const CartContext = createContext()
export const useCart = () => useContext(CartContext)
import Swal from 'sweetalert2'
export const CartProvider = ({children}) => {
    const [cartItems , setCartItems] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    //ADD item 
    const addtoCart = (Product) => {
        setCartItems((prevItem) => {
            const existingItem = prevItem.find((item) => item.id === Product.id);
            if(existingItem){
                Swal.fire({
                    title: 'Oops!',
                    text: 'Item already in Cart',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
                return prevItem
            }
            else{
            
            return [...prevItem, {...Product, quantity: 1, subTotal: Product.Price}]
            }
        })
    }

    const HandleRemove = (id) => {
        setCartItems((prevItem) => prevItem.filter((item) => item.id !==id))
    }
    const HandleClearCart = () => {
        setCartItems([])
    }
    const HandleDecrease = (item, id) => {
        setCartItems((prevItem) => 
            prevItem.map((item) => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1, 
            subTotal: (item.quantity - 1) * item.Price} : item
        ))
    }

    let Shipping = 25
    const SubTotalprice = cartItems.reduce((total, item) => total + item.subTotal, 0).toFixed(2)
    const totalprice = cartItems.reduce((total, item) => total + item.subTotal + Shipping, 0).toFixed(2)

    const HandleIncrease = (item, id) => {
        setCartItems((prevItem) => 
            prevItem.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1, subTotal: (item.quantity + 1) * item.Price} : item
        ))
    }
    useEffect(() => {
        const newSubtotal = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0)
        setSubTotal(newSubtotal)
    }, [cartItems])
  return (
    <CartContext.Provider value={{addtoCart, Shipping, HandleClearCart, SubTotalprice, totalprice, cartItems, setCartItems, HandleRemove, HandleIncrease, HandleDecrease, subTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider