import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const About = () => {
    return (
        <Layout>
            <Head page="About" />
            <section className="container fade-in">
                <div className="row">
                    <div className="col-lg-7 text-center" id="brand-statement">
                        <h1>A little bit about me...</h1>
                        <p>
                            My journey into software development started not too long ago, but my love for computers and technology has been around since I could type on a keyboard.
                            Like many of us, I grew up surrounded by technology, and my life from childhood to adulthood has been shaped by the ever-changing landscape of technological advancement.
                        </p>
                        <p>
                            I've always had a love for the sciences, which is why I chose to major in life sciences for my undergraduate degree and went into a career in biotechnology. A couple years into my lab career and while I was content, it still felt like something was missing. Programming was something I had always been curious about, but never pursued.
                        </p>
                        <p>
                        Finally, I tried my hand at learning some basic coding a few years ago, and it was like a spark lit in my brain -- this is something I could do. After much deliberation, I took a leap and fully committed to learning software development and to transitioning careers. 
                        </p>
                        <p>
                            Though my journey is still just beginning, I am thrilled to continue learning and developing my skills each and every day.
                        </p>
                        <p>
                            Some of my hobbies include cooking, art, video games, and traveling. Hoping to add more to this list as time goes on!
                        </p>
                        <br />

                        <p>If you've read this far -- thank you! I hope you enjoyed learning a little about me and please <Link to="/contact">reach out</Link> so we can get to know each other more :)</p>

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