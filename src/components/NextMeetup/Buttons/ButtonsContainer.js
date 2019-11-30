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
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const { id, ticketsUrl } = edges[0].node.frontmatter
        return (
          <Buttons
            id={id}
            ticketsUrl={ticketsUrl}
          />
        )
      }}
    />
  )
}
