import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Buttons } from './Buttons'

export function ButtonsContainer () {
  const data = useStaticQuery(graphql`query {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node {
                  parent  {
                    ... on File {
                      name
                    }
                  }
                  frontmatter {
                    id
                    ticketsUrl
                    remote
                  }
              } } }
            }`)

  const { edges } = data.allMarkdownRemark
  const { ticketsUrl, remote } = edges[0].node.frontmatter
  const { name: filename } = edges[0].node.parent

  return (
    <Buttons
      ticketsUrl={ticketsUrl}
      remote={remote}
      filename={filename}
    />
  )
}
