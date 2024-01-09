import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { array, arrayOf, shape, string } from "prop-types"
import Layout from '../components/layout'
import { TitleBar } from '../components/NextMeetup/TitleBar/TitleBar'
import { Talk } from '../components/Talk'
import { FullWidthContainer } from '../components/FullWidthContainer'
import { Buttons } from '../components/NextMeetup/Buttons/Buttons'
import * as styles from './meetup.module.css'

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
  const { title, image, sponsor, venue, date, talks, remote, ticketsUrl, status } = markdownData.frontmatter

  return (
    <Layout>
      <TitleBar
        title={title}
        image={image}
        sponsor={sponsor?.name}
        venue={venue?.name}
        date={date}
      />
      <div className={styles.talks}>
        {talks.map(talk => {
          const { id, video } = talk
          return (
            <Fragment key={id}>
              <Talk talk={talk} />
              {video && (
                <FullWidthContainer className={styles.video}>
                  <h3 className={styles.video__title}>Revoir ce talk</h3>
                  <div className={styles.video__wrapper}>
                    <iframe
                      key={id}
                      className={styles.video__iframe}
                      src={`https://www.youtube.com/embed/${ video }`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />
                  </div>
                </FullWidthContainer>
              )}
            </Fragment>
          )
        })}
      </div>
      { status === 'next' && remote && (
        <Buttons ticketsUrl={ticketsUrl} remote={remote} />
      )}
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
          status
          ticketsUrl
          remote
        }
      }
    }
  }
`
