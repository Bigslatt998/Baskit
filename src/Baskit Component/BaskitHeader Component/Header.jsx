import React, { useContext, useState } from 'react'
// import {Baskitlogo} from '../List'
import Baskitlogo from '../../assets/BaskitLogo.png';
import './Header.css'
import MenueDropDown from '../../Baskit Component/MenueDropDown Component/MenueDropDown'
import CartMenue from '../MainComponent/CartOpenComponent/CartOpen';
import { FaAngleDown, FaBagShopping, FaBars } from 'react-icons/fa6';
// import { CartContext } from '../../CartContext'
import CcartContext from '../../CartContext';
import { useCart } from '../../CartContext'

const Header = ({CartOpen, HandleCartOpen}) => {
  // const {cartItems} = useContext(CartContext)
         const {cartItems,  totalprice, Shipping, SubTotalprice} = useCart()
  
  const [CurrentPage, setCurrentPage] = useState('Home')
  const [Menue, setMenue] = useState(false)
  const HandleMenue = () => {
    setMenue(!Menue)
  }

  const [isCartMenue, setisCartMenue] = useState(false)
  const HandleCartMenue = () => {
    setisCartMenue(!isCartMenue)
  }
    const Cart = <FaBagShopping/>
    const Bar = <FaBars/>
    const AngleDown = <FaAngleDown/>
  return (
    <div id='header' className='Header'>
        <header>
            <div className="logo">
                <img src={Baskitlogo}/>
            </div>
            <nav>
                <ul>
                    <li>< a href='#' className={`${CurrentPage === 'Home' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("Home")}>Home</a> </li>
                    <li>< a href='#' className={`${CurrentPage === 'Shop' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("Shop")}>Shop</a> </li>
                    <li>< a href='#' className={`${CurrentPage === 'My Account' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("My Account")}>My Accoount <span>{AngleDown}</span></a>
                                    <div className='Dropdown'>
                                        <div>Order</div>
                                        <div>Address</div>
                                        <div>Account Details</div>
                                    </div>
                                    
                                    </li>
                    <li>< a href='#' className={`${CurrentPage === 'About' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("About")}>About</a> </li>
                    <li>< a href='#'
                                    className={`${CurrentPage === 'Contact' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("Contact")}>Contact</a> </li>
                    <div className="Other">
                    <p>${SubTotalprice}</p>
                    <div className='Cart'>
                    <i onClick={HandleCartMenue}>{Cart}</i>
                    <span>{cartItems.length}</span>
                    </div>
                </div>
                <i className="Bar" onClick={HandleMenue}>{Bar}</i>
                </ul>
            </nav>
        </header>
        <CartMenue Shipping={Shipping} totalprice={totalprice} SubTotalprice={SubTotalprice} HandleCartMenue={HandleCartMenue} isCartMenue={isCartMenue}/>
        <MenueDropDown HandleMenue={HandleMenue} Menue={Menue}/>
    </div>
  )
}

export default Header