import React from 'react'
import './Footer.css'
import { FaAngleDoubleUp } from 'react-icons/fa'
import Baskitlogo from '../../assets/BaskitLogo.png';

const Footer = () => {
    const Angleup = <FaAngleDoubleUp/>
  return (
    <div className='FooterContainer'>
        <footer>
            <div className="Box1">
                <img src={Baskitlogo}/>
                <p>The best look anytime,<br/> anywhere.</p>
            </div>
            <div className="Box2">
                <p>For Her</p>
                <li>Women Jeans</li>
                <li>Tops and Shirts</li>
                <li>Women Jackets</li>
                <li>Heels and Flats</li>
                <li>Women Accessories</li>
            </div>
            <div className="Box3">
                <p>For Him</p>
                <li>Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Jacket</li>
                <li>Men Shoes</li>
                <li>Men Accessories</li>
            </div>
            <div className="Box4">
                <p>Subsribe</p>
            <div className="InputXButton">
                <input placeholder='Enter Email'/>
                <button>Subsribe Here</button>
            </div>
            </div>
        </footer>
        <div className="Chat">
            <a href='#header'>{Angleup}</a>
        </div>
    </div>
  )
}

export default Footer