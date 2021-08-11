import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Projects from '../components/projects'
import Skills from '../components/skills'
import '../styles/styles.css'

const IndexPage = () => {

  return (
    <Layout>
      <Head page="Home" />

      <section className="container" id="about-me">
        <div className="row">
          <div className="col-lg-5" id="profile-picture">
            <img src="/images/profile-pic.jpeg" alt="profile picture" />
          </div>
          <div className="col-lg-7 text-center" id="brand-statement">
            <h1>Hello, I'm Camille Ocampo!</h1>
            <p>
              I am a software engineer and scientist with a passion for learning new things and tackling problems. With strong analytical skills, adaptive thinking, and creativity cultivated throughout my career, I welcome challenges as opportunities to showcase my best self, and to grow personally and professionally. Technology is constantly changing and evolving, and with it I strive to make meaningful change and a positive impact through software development.
            </p>
            <br />
            <a href="/images/resume.pdf" target="_blank">
              <button>
                View My Resume
              </button>
            </a>
          </div>
        </div>
      </section>
      <Projects />
      <Skills />
    </Layout>
  )
}

export default IndexPage