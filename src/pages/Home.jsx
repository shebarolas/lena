import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/slider/Hero'
import '../styles/home.css'
import { Heading } from '@chakra-ui/react'
import { Cards } from '../components/Home/Cards'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='home'>
      <SlideBar />
      <Hero />
      <div className="super">
        <div className="informacion">
          <Heading className="heading">Nuestros Productos</Heading>
          <div className="general">
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
        </div>
      </div>
      <div className="detalle">
        <div className="infor">
          <h1 className='somos'>¿Quienes Somos?</h1>
          <span className='text'>
          El fuego es utilizado en ceremonias y rituales tradicionales mapuches, como el Ngillatun, 
          donde se encienden fogatas como una forma de conexión con los ancestros y los espíritus de la naturaleza. 
          También se cree que el fuego tiene poderes purificadores y curativos.
          Además, el fuego es utilizado en la cocina tradicional mapuche para preparar alimentos y como un lugar de reunión comunitaria.
          </span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
