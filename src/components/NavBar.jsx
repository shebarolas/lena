import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DrawBar } from './DrawBar'
import '../styles/navbar.css';
import logo from '../imgs/logo.jpg';

export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="content">
                    <div className="nav">
                        <div className="options">
                            <Link to={'/'} ><span className='texto'>Inicio</span></Link>
                            <Link to={'/productos'} ><span className='texto'>Productos</span></Link>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" className="imgs" />
                        </div>
                        <div className="options">
                            <Link to={'/nosotros'}><span className='texto hei'>¿Quienes Somos?</span></Link>
                            <Link to={'/contacto'}><span className='texto'>Contacto</span></Link>
                            {/* <DrawBar /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
