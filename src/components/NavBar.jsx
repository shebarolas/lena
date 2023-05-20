import React from 'react'
import { Outlet } from 'react-router-dom'
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
                            <span className='texto'>Inicio</span>
                            <span className='texto'>Productos</span>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" className="imgs" />
                        </div>
                        <div className="options">
                            <span className='texto'>Nosotros</span>
                            <span className='texto'>Contacto</span>
                        </div>
                        <DrawBar />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
