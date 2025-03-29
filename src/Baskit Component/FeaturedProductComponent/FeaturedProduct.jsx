import React, { useRef, useState, useEffect } from 'react'
import './FeaturedProduct.css'
import { FeaturedProductList } from '../../List'
import { FaAngleLeft, FaAngleRight, FaBagShopping, FaCartShopping, FaEye } from 'react-icons/fa6'

const FeaturedProduct = ({HandlePreview, addtoCart}) => {
        const AngleRight = <FaAngleRight/>
        const AngleLeft = <FaAngleLeft/>
        const Eye = <FaEye/>
        const cart = <FaBagShopping/>
        
       
  return (
    <div className='FeaturedProduct'>
        <h3>Featured Product</h3>
        <div className="FeaturedProductContainer">
            {FeaturedProductList.map((Product) => (
                <div key={Product.id} className="Shoetrr">
                <img src={Product.IMG} className='Shoee'/>
                <div className="TTextt">
                <p>Running shoe</p>
                <p className='ShoeName'>{Product.ShoeName}</p>
                <p> <del>{Product.DeletePrice}</del> ${Product.Price}</p>
                </div>

                <div className="PreviewXaddtocar">
                    <i onClick={() =>addtoCart(Product)}>{cart}</i>
                </div>
            </div>
            ))}
        </div>



        {/* <div className="FeaturedProductContainer">
                    <button className='ScrllBtn LeftIII' onClick={scrollLeftIII}> {AngleLeft}</button>
                    <div className="ShoeCarousell" ref={carouseRefIII}>
                        <div className="Shoetrackk">
                        {FeaturedProductList.map((Product) => (
                        <div key={Product.id} className="Shoetrr">
                            <img src={Product.IMG} className='Shoee'/>
                            <div className="TTextt">
                            <p>Running shoe</p>
                            <p>{Product.ShoeName}</p>
                            <p> <del>{Product.DeletePrice}</del> ${Product.Price}</p>
                            </div>
        
                            <div className="PreviewXaddtocart">
                                <i onClick={ () => HandlePreview(Product)}>{Eye}</i>
                                <i onClick={() =>addtoCart(Product)}>{cart}</i>
                            </div>
                        </div>
                            
                        ))}
                        </div>
                    </div>
                    <button className='ScrllBtn RightIII' onClick={scrollRightIII}> {AngleRight}</button>
                </div> */}
    </div>
  )
}

export default FeaturedProduct