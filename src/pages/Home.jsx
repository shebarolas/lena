import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/slider/Hero'
import '../styles/home.css'
import { Heading } from '@chakra-ui/react'
import { Cards } from '../components/Home/Cards'
import { Footer } from '../components/Footer'
import { Video } from '../components/Home/Video'
import { MapBox } from '../components/Home/MapBox'
import { CardsH } from '../components/Home/CardsH'

export const Home = () => {
  return (
    <div className='home'>
      <SlideBar />
      <Hero />
      <div className="super">
        <div className="informacion">
          <h1 className="heading">Nuestros Productos</h1>
          <div className="general">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="detalle">
        <div className="infor">
          <h1 className='somos'>¿Quienes Somos?</h1>
          <div className="texVideo">
            <span className='text'>
              Kume Kutral es una frase que en mapuzungun significa 'BUEN FUEGO'.
              La inmensa gratitud que sentimos hacia el publo mapuche y sus riquezas,
              inspiran que esta marca tenga su sello.
              La leña que trozamos para envasar en sacos, busca entregar calor limpio y de calidad
              además de ser una opción práctica para el uso cotidiano eb cocinas, combustiobes, etc.
            </span>
            <Video />
          </div>
        </div>
      </div>
      <div className="contacto">
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
      <Footer />
    </div>
  )
}
