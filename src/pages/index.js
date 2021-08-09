import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import projects from '../data/projects.json'

const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />

      <section id="about-me">
        <h2>Hello, I'm Camille Ocampo!</h2>
        <div id="brand-statement">
          I am a programmer and scientist with a passion for learning new things and tackling problems. With strong analytical skills, adaptive thinking, and creativity cultivated throughout my career, I welcome challenges as opportunities to showcase my best self, and to grow personally and professionally. Technology is constantly changing and evolving, and with it I strive to make meaningful change and a positive impact through software development.
        </div>
      </section>

      <section id="projects" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
        <h2>Projects</h2>
        {
          projects.map((project, idx) => {
            return (
              <article key={idx} style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <div style={{ display: "inherit", margin: "2rem", width: "50%", justifyContent: "center" }}>
                  <img style={{ height: 175, border: "2px solid #333" }} src={project.image} alt={project.title} />
                </div>
                <div style={{ display: "inherit", margin: "2rem", width: "50%", justifyContent: "center", flexDirection: "column" }}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a href={project.githubLink}>View On Github</a>
                  <a href={project.deployedLink}>View Deployed Project</a>
                </div>
              </article>
            )
          }
          )
        }
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Python</li>
          <li>Django</li>
          <li>SQL</li>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage