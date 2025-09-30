import React, { useState } from 'react'
import './Navbar.css'
import logo from './logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Hamburger Menu Button */}
            <button 
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Vertical Navbar */}
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav-container">
                    <div className='logo-container'>
                        <img 
                            src={logo}
                            alt="Dojo Logo" 
                            className="logo-image"
                        />
                        <div className='logo'>
                            DOJO
                        </div>
                    </div>

                    <ul className="nav-links">
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#instructors">Instructors</a></li>
                        <li><a href="#media">Media</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Overlay when menu is open */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    )
}

export default Navbar