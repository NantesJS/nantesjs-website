/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {
  createFilePath
} = require(`gatsby-source-filesystem`)

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env.${ process.env.NODE_ENV }`,
})

const groupBy = require('lodash.groupby')
const path = require('path')
const { parse } = require('date-fns/fp')

const parseDate = parse(new Date(), 'dd/MM/yyyy')

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { status: { eq: "done" } } }) {
          nodes {
            frontmatter {
              id
              status
              date
              image
              title
              sponsor {
                name
              }
              venue {
                name
              }
              talks {
                id
                title
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
  `)

  const meetupsByYear = groupBy(result.data.allMarkdownRemark.nodes, node => {
    return parseDate(node.frontmatter.date).getFullYear()
  })

  const currentYear = new Date().getFullYear()
  const years = Object.keys(meetupsByYear).filter(year => year != currentYear)

  Object.entries(meetupsByYear).forEach(([year, meetups]) => {
    createPage({
      path: year,
      component: path.resolve(`./src/templates/meetups-per-year.js`),
      context: {
        meetups: meetups.map(meetup => meetup.frontmatter),
        years,
        year,
      },
    })
  })
}
