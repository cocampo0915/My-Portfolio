import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Socials from '../components/socials'
import Contact from '../components/contact'
import '../styles/styles.css'
import summary from '../data/summary.json'

const IndexPage = () => {

  return (
    <Layout>
      <Head page="Home" />

      <section className="container" id="about-me">
        <div className="row">
          <div className="col-lg-5" id="profile-picture">
            <img src="/images/profile-pic.jpeg" alt="profile" />
          </div>
          <div className="col-lg-7 text-center" id="brand-statement">
            <h1>{summary[0].title}</h1>
            <p>
              {summary[0].description}
            </p>
            <Socials listClass="sm" />
            <br></br>
            <a href="/images/resume2023.pdf" target="_blank" id="resume">
             
                View My Resume
              
            </a>
          </div>
        </div>
      </section>
      <Projects header="Featured Projects" url="/projects/"/>
      <Skills />
      <Contact />
    </Layout>
  )
}

export default IndexPage
