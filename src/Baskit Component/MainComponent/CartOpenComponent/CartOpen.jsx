import React from 'react'
import './CartOpen.css'
import { FaBicycle, FaCartShopping, FaXmark } from 'react-icons/fa6'
import { useCart } from '../../../CartContext'
import { FaShoppingBasket, FaTrashAlt } from 'react-icons/fa'
import { EmptyCartI, EmptyCartII } from '../../../List'
const CartMenue = ({isCartMenue, HandleCartMenue, Content }) => {
    const {cartItems, HandleRemove, HandleClearCart, HandleIncrease, HandleDecrease, subTotal,  totalprice, Shipping, SubTotalprice} = useCart()
    const Xmark = <FaXmark/>
    const Bag = <FaCartShopping/>
    const Remove = <FaTrashAlt/>
  return (
    <div className={`${ 'CartOpen'} ${isCartMenue ? 'OpenCart' : null} `}>
        <div className="Cancle">
            <i onClick={HandleCartMenue}>{Xmark}</i>
        </div>

        <p>Shopping Cart</p>
        <hr/>
        {cartItems.length === 0 ? (
            <div className='EmptyCart'>
                <img src={EmptyCartII}/>
                <div className="EmptyCartText">
                    <p>Cart's Feeling Light!</p>
                    <p>Your cart is longing for some company. Begin your shopping adventure now!</p>
                </div>
            </div>
        ):(
            <div className="CartAdded">
                <table>
                    <thead>
                        <tr>
                        <th>Produce</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Subtotal</th>
                        </tr>
                    </thead>
                    {cartItems.map((item) => (
                        <tbody key={item.id}>
                        <tr>
                            <td className='First'>
                                <span onClick={() => HandleRemove(item.id)}>{Xmark}</span>
                                <img src={item.IMG}/>
                            </td>
                            <td>${item.Price}</td>
                            <td>
                            <div className="butto">
                                <button onClick={() => HandleDecrease(item, item.id)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => HandleIncrease(item, item.id)}>+</button>
                            </div>
                            </td>
                            <td>
                            <select>
                                <option>Choose size</option>
                                <option>40</option>
                                <option>42</option>
                                <option>44</option>
                                <option>46</option>
                            </select>
                            </td>
                            <td>${item.subTotal ? item.subTotal.toLocaleString('en-US'): 0.00}</td>
                        </tr>
                    </tbody>
                    ))}
                    <div className="ClearCart">
                        
                        <span onClick={HandleClearCart}> Clear all {Remove}</span>
                    </div>
                </table>

                <div className="Total">
                    <table>
                        <thead>
                        <tr>
                        <th>Cart Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Subtotal: ${SubTotalprice}</td>
                            <td>Shipping Fee: ${Shipping}</td>
                            <td>Total: ${totalprice}</td>
                        </tr>
                        </tbody>
                        
                    </table>
                    <button>Check Out</button>

                </div>


            </div>
        )}
    </div>
  )
}

export default CartMenue

{/* <div className='CartContainer'>
{cartItems.map((Content) => (
    <>
    <div className="Display">
    <img src={Content.IMG}/>
    <div className="DisplayText">
        <p>Air Pro X3</p>
        <div className="butto">
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </div>
    </div>
</div>
<div className="Price">
<i>{Xmark}</i>
    <p>$65.00</p>
</div>
</>
))}
</div> */}