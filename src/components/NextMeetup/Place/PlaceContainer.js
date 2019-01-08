import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Place } from './Place'

export function PlaceContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  venue {
                    latitude
                    longitude
                  }
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const { venue } = edges[0].node.frontmatter
        return <Place {...venue} />
      }}
    />
  )
}
