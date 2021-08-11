import React from 'react'
import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import FadeInSection from './fadeinsection'

const Skills = (props) => (
  <FadeInSection>
    <section className="container tag" id="projects" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 id="skills-header">Skills</h1>
      </div>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-md-4 skills-list">
            <h6>Programming Languages</h6>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Libraries & Frameworks</h6>
            <ul className="skills-list">
              <li>React.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Databases</h6>
            <ul className="skills-list">
              <li>MongoDB</li>
              <li>SQL</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
)

export default Skills