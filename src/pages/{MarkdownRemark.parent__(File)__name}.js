import React from "react"
import { graphql } from "gatsby"

export default function Component(props) {
  console.log(props.data)
  return "Hello"
}

export const query = graphql`
  query($id: String) {
    allMarkdownRemark(filter: { id: { eq: $id } }) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`
