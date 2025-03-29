import React, { useState } from 'react'
import './Preview.css'
import { Shoeimages } from '../../../List'
import { FaXmark } from 'react-icons/fa6'
import { useCart } from '../../../CartContext'


const Preview = ({HandlePreview, setisPreview, isPreview, selectProduct}) => {
    const Cancle = <FaXmark/>
    const {cartItems, addtoCart, Product} = useCart()
    const [selectSize, setSelectSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const HandleIncrease = () => {
        setQuantity((prev) => prev + 1)
    }

    const HandleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }
    const handleSizeChange = (e) => {
        setSelectSize(e.target.value)
    }
    const Handleaddtocart = () => {
        if(!selectSize){
            alert('ggg')
            return;
        }
        // const cartItem = {
        //     id: selectProduct.id,
        //     ShoeName: selectProduct.ShoeName,
        //     Price: selectProduct.Price,
        //     IMG: selectProduct.IMG,
        //     size: selectSize,
        //     quantity: quantity,
        // }
        addtoCart({
            ...selectProduct, 
            size: selectSize,
            quantity
        })
        setisPreview(false)
    }
  return (
    <div className={`${'preview'} ${isPreview? 'Active' : null}`}>
        {selectProduct && (
            <>
            <div className="IMg">
                <img src={selectProduct.IMG}/>
            </div>

            <div className="Details">
                <h3>{selectProduct.ShoeName}</h3>
                <p> <del>{selectProduct.DeletePrice}</del> ${selectProduct.Price}</p>
                <p>{selectProduct.Discription}</p>
                <hr/>
                <p>SKU: N/A <span className='Category'>Category: <span className= 'RunningShoes'> Running Shoes</span></span></p>
                <label>Size: </label>
                    <br/>
                <select onChange={handleSizeChange} value={selectSize}>
                    <option value=''>Choose size</option>
                    {selectProduct?.sizes?.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                
                <hr/>
                <div className="Foooter">
                <div className='buttton'>
                <button onClick={HandleDecrease}>-</button>
                <p className='butttonPPP' >{quantity}</p>
                <button onClick={HandleIncrease}>+</button>
                </div>

                <div className="ADDtoCat">
                    <button onClick={Handleaddtocart}>Add to cart</button>
                </div>
                </div>
            </div>
            </>
        )}
        <i onClick={HandlePreview} className='Cancle'>{Cancle}</i>
    </div>
  )
}

export default Preview