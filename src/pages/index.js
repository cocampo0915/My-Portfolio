import React, {useState, useEffect, useRef} from 'react'
import { ReactDOM } from 'react-dom'
import Layout from '../components/layout'
import Head from '../components/head'
import projects from '../data/projects.json'
import '../styles/styles.css'

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const IndexPage = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout>
      <Head page="Home" />

      <section className="container" id="about-me">
        <div className="row">
          <div className="col-lg-6" id="profile-picture">
            <img src="/images/profile-pic.jpeg" alt="profile picture" />
          </div>
          <div className="col-lg-6" id="brand-statement">
            <h1>Hello, I'm Camille Ocampo!</h1>
            <p>
              I am a software engineer and scientist with a passion for learning new things and tackling problems. With strong analytical skills, adaptive thinking, and creativity cultivated throughout my career, I welcome challenges as opportunities to showcase my best self, and to grow personally and professionally. Technology is constantly changing and evolving, and with it I strive to make meaningful change and a positive impact through software development.
            </p>
            <br />
            <p>See My <a href="/images/resume.pdf" target="_blank">Resume</a></p>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section class="tag" id="projects" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
          <div style={{ display: "inherit", textAlign: "left" }}>
            <h1>Projects</h1>
          </div>
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
      </FadeInSection>
      <FadeInSection>
        <section class="tag" id="skills">
          <h1>Skills</h1>
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
      </FadeInSection>
    </Layout>
  )
}

export default IndexPage