import React from "react"
import { graphql } from "gatsby"
import { arrayOf, shape, string } from "prop-types"
import Layout from '../components/layout'
import { TitleBar } from '../components/NextMeetup/TitleBar/TitleBar'

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
  const { title, image, sponsor, venue, date } = markdownData.frontmatter

  return (
    <Layout>
      <TitleBar
        title={title}
        image={image}
        sponsor={sponsor.name}
        venue={venue.name}
        date={date}
      />
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
          image
          sponsor {
            id
            name
          }
          venue {
            id
            name
          }
          date
        }
      }
    }
  }
`
