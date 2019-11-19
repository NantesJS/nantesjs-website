const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')
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
  path: `.env.${process.env.NODE_ENV}`,
})

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

exports.createPages = ({ graphql }) => {
  return new Promise(async (resolve, reject) => {
    const meetups = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                id
                title
              }
            }
          }
        }
      }
    `)
      .then(({ data }) => data.allMarkdownRemark.edges)
      .then(edges => edges.map(edge => edge.node.frontmatter))

    const source = fs.readFileSync(path.join(__dirname, './affiche.template.html')).toString('utf8')
    const template = handlebars.compile(source)
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    const bitmap = fs.readFileSync(path.join(__dirname, 'static', 'images', 'logotype.png'))
    const base64 = new Buffer(bitmap).toString('base64')
    const logo = 'data:image/png;base64,' + base64

    for (const meetup of meetups) {
      await page.setContent(template({ title: meetup.title, logo }))
      const elements = await page.$$('html')
      const element = elements[0]
      await element.screenshot({ path: `./public/${ meetup.id }.png` })
    }

    await browser.close()

    resolve()
  })
}
