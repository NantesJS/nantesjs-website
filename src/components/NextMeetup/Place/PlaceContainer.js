import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Place } from './Place'

export function PlaceContainer () {
  const data = useStaticQuery(graphql`query {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  venue {
                    latitude
                    longitude
                    name
                    link
                    address
                    postal_code
                    city
                  }
                }
              } } }
            }`)

  const { edges } = data.allMarkdownRemark
  const { venue } = edges[0].node.frontmatter

  return <Place {...venue} />
}
