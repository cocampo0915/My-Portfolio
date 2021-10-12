import React from 'react'
import { Link } from 'react-scroll'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li className="header-links">
                <Link 
                    to="about-me" 
                    spy={true} 
                    smooth={true} 
                    offset={-120}
                    >ABOUT</Link>
                </li>
                <li className="header-links">
                    <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-120}
                    >PROJECTS</Link>
                </li>
                <li className="header-links">
                    <Link 
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-120}
                    >SKILLS</Link>
                </li>
                <li className="header-links">
                    <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100}
                    >CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar