import React from 'react'
import './Article.css'
import { FaArrowRight, FaEarthAfrica, FaTag, FaWordpressSimple } from 'react-icons/fa6'
import { FaLock, FaShieldAlt } from 'react-icons/fa'

const Article = () => {
        const ArrowRight = <FaArrowRight/>
        const WorldIcon = <FaEarthAfrica/>
        const TagIcon = <FaTag/>
        const LockIcon = <FaLock/>
        const ShieldIcon = <FaShieldAlt/>
        
    
  return (
    <div className='ArticleContainer'>
    <div className='Article'>
        <article>
            <h4>Limited Stock Available!</h4>
            <h5>AirPro X3. Turbocharged.</h5>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
            <button><span>{ArrowRight}</span>Shop now</button>
        </article>
        </div>
        <div className="OffersContainer">
        <div className="Offers">
            <div className="world Box">
                <i>{WorldIcon}</i>
                <p>Worldwide Shipping</p>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="Quality Box">
                <i>{ShieldIcon}</i>
                <p>Best Quality</p>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="bestOffer Box">
                <i>{TagIcon}</i>
                <p>Best Offers</p>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="Payment Box">
                <i>{LockIcon}</i>
                <p>Secure Payments</p>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>
        </div>
        <div className="Ads">
            <h6>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h6>
        </div>
    </div>
  )
}

export default Article