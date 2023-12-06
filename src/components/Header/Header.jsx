import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
    document.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;
      
        if (scrollPosition > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    
  return (
      <header className='header'>
        <div className="logo">
        <h1><a href="index.html">Gruapp</a>
            <hr className='hr1'/>
        </h1>        
        </div>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        {/* <NavLink to ="/servicio">servicio</NavLink>
                        <NavLink to="/beneficio">beneficio</NavLink> */}
                        <NavLink to="/gruas">Gruas</NavLink>
                        {/* <NavLink to="/chat">Chat</NavLink> */}
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </nav>
      </header>
  )
}
