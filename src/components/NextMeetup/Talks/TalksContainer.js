import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import he from 'he'

import { Talks } from './Talks'

export function TalksContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
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
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const talks = edges[0].node.frontmatter.talks.map(talk => {
          return {
            ...talk,
            description: he.decode(talk.description),
          }
        })
        return <Talks talks={talks} />
      }}
    />
  )
}
