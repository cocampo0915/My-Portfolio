import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects"


const ProjectPage = () => {
  return (
    <Layout>
      <Head page="Projects" />
      <Projects header="All Projects" />
    </Layout>
  )
}

export default ProjectPage