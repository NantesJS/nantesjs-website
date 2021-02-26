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

  const currentYear = new Date().getFullYear()

  const meetupsByYear = result.data.allMarkdownRemark.nodes.reduce((acc, node) => {
    const year = parseDate(node.frontmatter.date).getFullYear()

    if (year === currentYear) return acc

    if (acc.has(year)) {
      acc.get(year).push(node)
    } else {
      acc.set(year, [node])
    }

    return acc
  }, new Map())

  const years = Array.from(meetupsByYear.keys())

  meetupsByYear.forEach((meetups, year) => {
    createPage({
      path: `/${ year }`,
      component: path.resolve(`./src/templates/meetups-per-year.js`),
      context: {
        meetups: meetups.map(meetup => meetup.frontmatter),
        years,
        year,
      },
    })
  })
}
