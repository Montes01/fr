import React,{useState, useEffect} from 'react'
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
                        <a href="">Home</a>
                        <a href="">Gruas</a>
                        <a href="">Chat</a>
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </li>
                </ul>
            </nav>
      </header>
  )
}
