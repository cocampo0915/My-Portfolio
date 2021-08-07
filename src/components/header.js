import React from 'react'
import { StyledHeader } from '../styles/styled-components'
import { Link } from 'gatsby'

const Header = (props) => (
    <StyledHeader>
        <h1>
            <Link to="/">
                Camille JS
            </Link>
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header