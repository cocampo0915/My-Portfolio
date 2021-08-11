import React from 'react'
import { StyledFooter } from '../styles/styled-components'

const Footer = (props) => (
    <StyledFooter>
        <p class="text-center">Created by Camille Ocampo &copy; {new Date().getFullYear()} All Rights Reserved</p>
    </StyledFooter>
)

export default Footer