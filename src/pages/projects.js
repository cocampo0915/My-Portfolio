import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects"
import "../styles/styles.css"

const ProjectPage = () => {
  return (
    <Layout>
      <Head page="Projects" />
      <Projects header="All Projects" url="/"/>
    </Layout>
  )
}

export default ProjectPage