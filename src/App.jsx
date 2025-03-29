import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './Baskit Component/MainComponent/Main'
import Header from './Baskit Component/BaskitHeader Component/Header'
import Article from './Baskit Component/ArticleComponent/Article'
import Footer from './Baskit Component/FooterComponent/Footer'
function App() {
  
  const [CartOpen, setCartOpen] = useState(false)
  const HandleCartOpen = () => {
    setCartOpen(!CartOpen)
  }
  
  return (
    <div className="App">
    <Header CartOpen={CartOpen} HandleCartOpen={HandleCartOpen}/>
    <Main CartOpen={CartOpen} HandleCartOpen={HandleCartOpen}/>
    <Article />
    <Footer/>
    </div>
  )
}

export default App
