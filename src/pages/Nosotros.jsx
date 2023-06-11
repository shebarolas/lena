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
          <h1 className='somoss'>¿Quienes Somos?</h1>
          <div className="texVideo">
            <span className='text'>
            Kume Kutral es una frase que en mapuzungun significa 'BUEN FUEGO'.
              La inmensa gratitud que sentimos hacia el publo mapuche y sus riquezas,
              inspiran que esta marca tenga su sello.
              La leña que trozamos para envasar en sacos, busca entregar calor limpio y de calidad
              además de ser una opción práctica para el uso cotidiano en cocinas, combustiones, etc.
            </span>
            <Video />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
