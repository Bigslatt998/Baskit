import React, { useState } from 'react'
import './MenueDropDown.css'
import { FaAngleDown, FaBagShopping, FaBars } from 'react-icons/fa6'

const MenueDropDown = ({HandleMenue, Menue}) => {
    const [CurrentPage, setCurrentPage] = useState('Home')
    const AngleDown = <FaAngleDown/>
return (
    <div className={`${ 'MenueDropDown'} ${Menue ? 'AActive' : null} `}>
        <ul>
                    <li>< a href='#' className={`${CurrentPage === 'Home' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("Home")}>Home</a> </li>
                    <li>< a href='#' className={`${CurrentPage === 'Shop' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("Shop")}>Shop</a> </li>
                    <li>< a href='#' className={`${CurrentPage === 'My Account' ? 'Active' : null}`}
                                    onClick={() => setCurrentPage("My Account")}>My Accoount <span>{AngleDown}</span></a>
                                    <div className="AccountDropDown">
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
                </ul>
    </div>
  )
}

export default MenueDropDown