import React from 'react'
import '../styles/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import projects from '../data/projects.json'
import FadeInSection from './fadeinsection'

const Projects = (props) => (
    <FadeInSection>
        <section className="container tag" id="projects" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 id="projects-header">{props.header}</h1>
            </div>
            <hr></hr>
            {
                projects.map((project, idx) => {
                    return (
                        <article className="container project-card" key={idx}>
                            <div className="row center-block">
                                <div className="col-lg-6 center-block">
                                    <img className="img-responsive" src={project.image} alt={project.title} />
                                </div>
                                <div className="col-lg-6 center-block">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div id="project-links">
                                        <p style={{ alignSelf: "flex-end" }}>
                                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Live</a> | <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                }
                )
            }
        </section>
    </FadeInSection>
)

export default Projects