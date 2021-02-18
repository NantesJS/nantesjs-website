import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Buttons } from './Buttons'

export function ButtonsContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  id
                  ticketsUrl
                  remote
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const { ticketsUrl, remote } = edges[0].node.frontmatter
        return (
          <Buttons
            ticketsUrl={ticketsUrl}
            remote={remote}
          />
        )
      }}
    />
  )
}
