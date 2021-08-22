import React from 'react'
import { StyledHeader } from '../styles/styled-components'
import { Link } from 'gatsby'
import Navbar from './navbar'

const Header = (props) => (
    <StyledHeader>
        <Link to="/">
            <h1 id="header-logo">
                Camille Codes
            </h1>
        </Link>
        <Navbar />
    </StyledHeader>
)

export default Header