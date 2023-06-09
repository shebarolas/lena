import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';
import logo from '../imgs/logo.jpg'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="informacions">
        <img src={logo} alt="" className='fotLogo' />
        <span>@ Direccion Fundo Santa Orfelia</span>
        <span>@ Telefono: +5691234567</span>
      </div>
      <div className="logos">
        <a href="https://www.facebook.com/profile.php?id=100093055598485"><FaFacebook size={30}/></a>
        <FaTwitter size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  )
}
