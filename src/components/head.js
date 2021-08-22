import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ page }) => {
    const { site: { siteMetadata: { title, description } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${page} | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Megrim&family=Montserrat&family=Parisienne&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        </Helmet>
    )
}

export default Head