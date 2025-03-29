import React from 'react'
import './Main.css'
import SSplash from '../../assets/SSplash.png';
import sports from '../../assets/sports.png';
import { FaArrowRight } from 'react-icons/fa6';
import Section from './SectionComponent/Section';
const Main = () => {
    const ArrowRight = <FaArrowRight/>
  return (
    <div className="MainContainer">
    <div className='Main'>
        <main>
        <div className="img">
        <img src={SSplash}/>
        <img src={sports}/>
        <h1>AirPro X3</h1>
        </div>
        <button> <span>{ArrowRight}</span>SHOP COLLECTION</button>
        </main>
        <Section />
        
    </div>
    </div>
  )
}

export default Main