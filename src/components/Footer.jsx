import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';
import logo from '../imgs/logo.jpg'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="informacions">
        <img src={logo} alt="" className='fotLogo' />
        <span>@ Direccion: Calle 777 Temuco</span>
        <span>@ Telefono: +5691234567</span>
      </div>
      <div className="logos">
        <FaFacebook size={30} />
        <FaTwitter size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  )
}
