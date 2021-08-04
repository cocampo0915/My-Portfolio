import React from 'react'
import { StyledFooter } from '../styles/styled-components'

const Footer = (props) => (
    <StyledFooter>
        <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
)

export default Footer