import React, { useRef, useState, useEffect } from 'react'
import './Section.css'
import { LogoImages, Shoeimages } from '../../../List'
import { FaAngleLeft, FaAngleRight, FaBagShopping, FaCartShopping, FaEye } from 'react-icons/fa6'
import Preview from '../PreviewComponent/Preview'
import { useCart } from '../../../CartContext'
import FeaturedProduct from '../../FeaturedProductComponent/FeaturedProduct'
const Section = ({Content}) => {
    const {cartItems, addtoCart, HandleRemove, HandleIncrease, HandleDecrease, subTotal} = useCart()
    const AngleRight = <FaAngleRight/>
    const AngleLeft = <FaAngleLeft/>
    const Eye = <FaEye/>
    const cart = <FaBagShopping/>
   const carouseRef = useRef(null)
   const carouseRefII = useRef(null)
    //    const {} = useCart()
   
   const scrollLeft = () => {
    if(carouseRef.current){
        carouseRef.current.scrollBy({ left: -50, behavior: 'smooth'})
    }
   }

   const scrollRight = () => {
    if(carouseRef.current){
        carouseRef.current.scrollBy({ left: 50, behavior: 'smooth'})
    }
   }


   const scrollLeftII = () => {
    if(carouseRefII.current){
        carouseRefII.current.scrollBy({ left: -300, behavior: 'smooth'})
    }
   }

   const scrollRightII = () => {
    if(carouseRefII.current){
        carouseRefII.current.scrollBy({ left: 300, behavior: 'smooth'})
    }
   }

    const [isPreview, setisPreview] = useState(false)
    const [selectProduct, setselectProduct] = useState([])
    const HandlePreview = (Product) => {
        setisPreview(!isPreview)
        setselectProduct(Product)
    }
    useEffect(() => {
        if(isPreview){
            document.body.classList.add('no-scroll')
        } else{
            document.body.classList.remove('no-scroll')
        }
    }, [isPreview])

    
  return (
    <div className="Section">
        <div className="CarouselContainer">
            <div className="Carousel" ref={carouseRef}>
                <div className="logotrack">
                {LogoImages.concat(LogoImages).map((Content, index) => (
                    <img key={index} src={Content} className='logo'/>
                ))}
                </div>
            </div>
        </div>

        <section>
            <div className="Text">
            <h2>unbelievable</h2>
            <p>Speed. Comfort.</p>
            </div>

            <div className="ShoContainer">
            <button className='ScrllBtn LeftII' onClick={scrollLeftII}> {AngleLeft}</button>
            <div className="ShoeCarousel" ref={carouseRefII}>
                <div className="Shoetrack">
                {Shoeimages.map((Product) => (
                <div key={Product.id} className="Shoetr">
                    <img src={Product.IMG} className='Shoe'/>
                    <div className="TText">
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
            <button className='ScrllBtn RightII' onClick={scrollRightII}> {AngleRight}</button>
        </div>
        <FeaturedProduct HandlePreview={HandlePreview} addtoCart={addtoCart}/>

        <Preview HandlePreview={HandlePreview} selectProduct={selectProduct} isPreview={isPreview} setisPreview={setisPreview}/>
        </section>
        

        </div>
  )
}

export default Section