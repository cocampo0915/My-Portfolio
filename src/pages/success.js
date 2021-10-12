import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Success = (props) => {
    return (
            <Layout>
                <Head page="Contact Form Submitted!" />
                    <section className="contact-page">
                        <h3>Form successfully submitted!</h3>
                        <p>Thank you for sending a message!</p>

                        <p>Click <Link to="/">here</Link> to get back to the home page</p>
                    </section>
            </Layout>
    )
}

export default Success