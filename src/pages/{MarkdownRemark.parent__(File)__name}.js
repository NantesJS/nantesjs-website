import React from "react"
import { graphql } from "gatsby"
import { array, arrayOf, shape, string } from "prop-types"
import Layout from '../components/layout'
import { TitleBar } from '../components/NextMeetup/TitleBar/TitleBar'
import { Talks } from '../components/NextMeetup/Talks/Talks'

Component.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      nodes: arrayOf(shape({
        frontmatter: shape({
          title: string.isRequired,
          image: string.isRequired,
          sponsor: shape({
            name: string.isRequired,
          }),
          venue: shape({
            name: string.isRequired,
          }),
          date: string.isRequired,
          talks: array.isRequired,
        })
      }))
    })
  })
}

export default function Component ({ data }) {
  const [markdownData] = data.allMarkdownRemark.nodes
  const { title, image, sponsor, venue, date, talks } = markdownData.frontmatter

  return (
    <Layout>
      <TitleBar
        title={title}
        image={image}
        sponsor={sponsor.name}
        venue={venue.name}
        date={date}
      />
      <Talks talks={talks} />
      {talks.map(({ video, id }) => (
        <iframe
          key={id}
          src={`https://www.youtube.com/embed/${ video }`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      ))}
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
          talks {
            id
            title
            description
            video
            speakers {
              id
              name
              link
            }
          }
        }
      }
    }
  }
`
