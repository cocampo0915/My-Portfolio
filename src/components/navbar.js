import React from 'react'
import { Link } from 'gatsby'
import navLinks from '../constants/links'

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
            <ul>
                {navLinks.map(link => {
                    return (
                        <li className="header-links">
                            <Link key={link.id} to={link.url}>{link.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar