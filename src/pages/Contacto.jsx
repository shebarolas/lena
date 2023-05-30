import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/Contacto/Hero'
import { MapBox } from '../components/Home/MapBox'
import { CardsH } from '../components/Home/CardsH'
import { Footer } from '../components/Footer'
import { Formulario } from '../components/Contacto/Formulario'
import '../styles/contacto.css'

export const Contacto = () => {
  return (
    <div className='ss'>
        <SlideBar/>
        <Hero/>
        <div className="contactoss">
        <div className="todo">
          <h1 className="heading pad">Contacto</h1>
          <div className="map">
            <div className="cards">
              <CardsH />
              <CardsH />
            </div>
            <MapBox />
          </div>
        </div>
      </div>
      <Formulario/>
      <Footer />
    </div>
  )
}
