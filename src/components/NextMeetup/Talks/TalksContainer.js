import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Talks } from './Talks'

export function TalksContainer () {
  const data = useStaticQuery(graphql`query {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  talks {
                      id
                      title
                      description
                      speakers {
                          id
                          name
                          link
                      }
                  }
                }
              } } }
            }`)

  const { edges } = data.allMarkdownRemark
  const { talks } = edges[0].node.frontmatter

  return <Talks talks={talks} />
}
