import React from 'react'
import '../../styles/formulario.css'

export const Formulario = () => {
  return (
    <>
        <div className="form">
            <h1 className="contactos">
                Formulario de contacto
            </h1>
            <form action="" className="forma">
                <input type="text" placeholder="Nombre" className="border" />
                <input type="text" placeholder="Email" className='border'/>
                <input type="text" placeholder='Telefono' className='border'/>
                <textarea placeholder='Que desea comprar' cols="30" rows="10" className='border'></textarea>
                <button className='btnForm'>Enviar</button>
            </form>
        </div>
    </>
  )
}
