import React from 'react'
import { StyledFooter } from '../styles/styled-components'
import Socials from './socials'

const Footer = (props) => (
    <StyledFooter>
        <div className="container text-center">
            <Socials />
        </div>
        <p class="text-center">Created by Camille Ocampo &copy; {new Date().getFullYear()} All Rights Reserved</p>
    </StyledFooter>
)

export default Footer