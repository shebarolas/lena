import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/slider/Hero'
import '../styles/home.css'
import { Heading } from '@chakra-ui/react'
import { Cards } from '../components/Home/Cards'
import { Footer } from '../components/Footer'
import { Video } from '../components/Home/Video'
import { MapBox } from '../components/Home/MapBox'

export const Home = () => {
  return (
    <div className='home'>
      <SlideBar />
      <Hero />
      <div className="super">
        <div className="informacion">
          <h1 className="heading">Nuestros Productos</h1>
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
          <div className="texVideo">
            <span className='text'>
            El fuego es utilizado en ceremonias y rituales tradicionales mapuches, como el Ngillatun, 
            donde se encienden fogatas como una forma de conexión con los ancestros y los espíritus de la naturaleza. 
            También se cree que el fuego tiene poderes purificadores y curativos.
            Además, el fuego es utilizado en la cocina tradicional mapuche para preparar alimentos y como un lugar de reunión comunitaria.
            </span>
            <Video/>
          </div>
        </div>
      </div>
      <div className="contacto">
        <div className="todo">
          <h1 className="heading pad">Contacto</h1>
          <div className="map">
                <span className="tex">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eligendi eos odio officia ipsam dicta iusto, 
                  enim quos reprehenderit ea delectus vero id beatae explicabo aperiam reiciendis quo sequi velit!</span>
                <MapBox/>
          </div>
        </div>    
      </div>
      <Footer/>
    </div>
  )
}
