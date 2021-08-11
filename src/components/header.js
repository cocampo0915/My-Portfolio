import React from 'react'
import { StyledHeader } from '../styles/styled-components'
import { Link } from 'gatsby'

const Header = (props) => (
    <StyledHeader>
        <Link to="/">
            <h1 id="header-logo">
                Camille Codes
            </h1>
        </Link>
        <nav>
            <ul>
                <li className="header-links">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="header-links">
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header