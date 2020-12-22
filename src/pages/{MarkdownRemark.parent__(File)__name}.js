import React from "react"
import { graphql } from "gatsby"
import { arrayOf, shape, string } from "prop-types"
import Layout from '../components/layout'

Component.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      nodes: arrayOf(shape({
        frontmatter: shape({
          title: string.isRequired,
        })
      }))
    })
  })
}

export default function Component ({ data }) {
  const [markdownData] = data.allMarkdownRemark.nodes
  const { title } = markdownData.frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
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
