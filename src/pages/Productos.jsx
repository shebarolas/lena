import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/Productos/Hero'
import { Cards } from '../components/Productos/Cards'
import '../styles/productos.css'
import { Footer } from '../components/Footer'

export const Productos = () => {
  return (
    <div className="productos">
      <SlideBar />
      <Hero />
      <div className="product">
        <div className="prod">
          <div className="textPro">
            <h1 className='texP'>Productos</h1>
          </div>
          <div className="cardss">
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
