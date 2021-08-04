import React from 'react'
import { StyledHeader } from '../styles/styled-components'
import { Link } from 'gatsby'

const Header = (props) => (
    <StyledHeader>
        <h1>
            <Link to="/">
                Camille Ocampo
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
            </ul>
        </nav>
    </StyledHeader>
)

export default Header