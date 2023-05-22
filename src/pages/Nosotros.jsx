import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/Nosotros/Hero'
import { Video } from '../components/Home/Video'
import '../styles/nosotros.css'
import { Footer } from '../components/Footer'

export const Nosotros = () => {
  return (
    <div className="nosotros">
      <SlideBar />
      <Hero />
      <div className="detalles">
        <div className="infor">
          <h1 className='somos'>¿Quienes Somos?</h1>
          <div className="texVideo">
            <span className='text'>
              El fuego es utilizado en ceremonias y rituales tradicionales mapuches, como el Ngillatun,
              donde se encienden fogatas como una forma de conexión con los ancestros y los espíritus de la naturaleza.
              También se cree que el fuego tiene poderes purificadores y curativos.
              Además, el fuego es utilizado en la cocina tradicional mapuche para preparar alimentos y como un lugar de reunión comunitaria.
            </span>
            <Video />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
