import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import { StyledLayout } from '../styles/styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = (props) => {
    return (
        <>
        <Router>
            <StyledLayout>
                <Header />
                <div>
                    <main>
                        {props.children}
                    </main>
                </div>
                <Footer />
            </StyledLayout>
        </Router>
        </>
    )
}


export default Layout