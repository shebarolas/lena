import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/slider/Hero'
import '../styles/home.css'
import { Heading } from '@chakra-ui/react'
import { Cards } from '../components/Home/Cards'

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
        <h1>Hola</h1>
      </div>
    </div>
  )
}
