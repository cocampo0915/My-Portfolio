import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head page="About" />
            <section className="container" id="about-me">
                <div className="row">
                    <div className="col-lg-7 text-center" id="brand-statement">
                        <h1>A little bit about me...</h1>
                        <p>
                            My journey into software development started not too long ago, but my love for computers and technology has been around since I could type on a keyboard.
                            Like many of us, I grew up surrounded by technology, and my life from childhood to adulthood has been shaped by the ever-changing landscape of technological advancement.
                        </p>
                        <p>
                            I've always had a love for the sciences, which is why I chose to major in life sciences for my undergraduate degree and went into a career in biotechnology.
                        </p>
                        <p>
                            Some of my hobbies include cooking, art, video games, and traveling.
                        </p>
                        <br />

                    </div>
                    <div className="col-lg-5" id="profile-picture-2">
                        <img src="/images/profile-pic-2.jpeg" alt="profile picture" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About