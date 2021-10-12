import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import about from '../data/about.json'

const About = () => {
    return (
        <Layout>
            <Head page="About" />
            <section className="container fade-in">
                <div className="row">
                    <div className="col-lg-7 text-center" id="brand-statement">
                        {
                            about.map((a, idx) => {
                                return (
                                    <>
                                        <h1 key={idx}>{a.title}</h1>
                                        <p key={idx}>{a.paragraph1}</p>
                                        <p key={idx}>{a.paragraph2}</p>
                                        <p key={idx}>{a.paragraph3}</p>
                                        <p key={idx}>{a.paragraph4}</p>
                                        <p key={idx}>{a.paragraph5}</p>
                                        <p key={idx}>{a.paragraph6}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-5" id="profile-picture-2">
                        <img src="/images/profile-pic-2.jpeg" alt="profile" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About