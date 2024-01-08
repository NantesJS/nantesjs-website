import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { TitleBar } from './TitleBar'

export function TitleBarContainer () {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  id
                  title
                  date
                  image
                  sponsor {
                    id
                    name
                  }
                  venue {
                      id
                      name
                  }
                }
              } } }
    }
  `)

  const { edges } = data.allMarkdownRemark
  const { title, date, image, venue, sponsor } = edges[0].node.frontmatter

  return (
    <TitleBar
      title={title}
      date={date}
      image={image}
      venue={venue.name}
      sponsor={sponsor.name}
    />
  )
}
