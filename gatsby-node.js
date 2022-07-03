require("dotenv").config({
  path: `.env.${ process.env.NODE_ENV }`,
})

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs')
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const nodeHtmlToImage = require('node-html-to-image')
const { parse } = require('date-fns/fp')
const { format } = require('date-fns')
const { fr } = require('date-fns/locale')
const smartTruncate = require('smart-truncate');
const he = require('he')
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
      allMarkdownRemark {
        edges {
          node {
            parent  {
              ... on File {
                name
              }
            }
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
    }
  `)
  
  createMeetupsByYearPage(result, { createPage })

  await createMeetupPosters(result)
}

async function createMeetupPosters (result) {
  console.log('⏳ Start creating posters')
  const meetups = result.data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      ...node.frontmatter,
      filename: node.parent.name
    }
  })

  const postersToCreate = meetups.filter(({ filename }) => {
    return !fs.existsSync(path.join(__dirname, 'static', 'posters', `${ filename }-poster.jpg`))
  })
  console.log('🚀 Posters to create :', postersToCreate.length)
  
  await nodeHtmlToImage({
    html: fs.readFileSync(path.join(__dirname, 'src', 'templates', 'meetup-poster.html')).toString('utf8'),
    content: postersToCreate.map(meetup => ({
      output: path.join(__dirname, 'static', 'posters', `${ meetup.filename }-poster.jpg`),
      title: meetup.title,
      day: format(parseDate(meetup.date), 'dd', { locale: fr }),
      month: format(parseDate(meetup.date), 'MMM', { locale: fr }),
      sponsor: meetup.sponsor ? meetup.sponsor.name : 'NantesJS',
      venue: meetup.venue ? meetup.venue.name : '',
      ticketsUrl: meetup.ticketsUrl,
      talks: meetup.talks.map(talk => {
        talk.description = talk.description ? smartTruncate(he.decode(talk.description), 300) : ''
        talk.title = he.decode(talk.title)
        talk.speakers = talk.speakers.map((speaker, index) => {
          // Gérer pas de link
          if (speaker.link) {
            const linkParts = speaker.link.split('/')
            speaker.handle = linkParts.pop()
          } 

          if (talk.speakers.length > 1) {
            const minSize = 25
            const variableSize = 75 / talk.speakers.length
            const percent = `${ minSize + variableSize }%`
            // Problème de positionnement en hauteur
            const position = `${ index * variableSize }%`

            // eslint-disable-next-line max-len
            speaker.style = `width: ${ percent }; padding-top: ${ percent }; border-radius: ${ percent }; position: absolute; top: ${ position }; left: ${ position }`
          }

          return speaker
        })
        talk.twitterHandles = talk.speakers.map(s => s.handle).join(', ')
        return talk
      }),
    }))
  })
  console.log('✅ Posters successfully created')
}

function createMeetupsByYearPage (result, { createPage }) {
  const currentYear = new Date().getFullYear()

  const meetupsByYear = result.data.allMarkdownRemark.edges.reduce((acc, { node }) => {
    const meetup = {
      ...node.frontmatter,
      filename: node.parent.name,
    }

    const year = parseDate(meetup.date).getFullYear()

    if (year === currentYear) return acc

    if (acc.has(year)) {
      acc.get(year).push(meetup)
    } else {
      acc.set(year, [meetup])
    }

    return acc
  }, new Map())

  const years = Array.from(meetupsByYear.keys())

  meetupsByYear.forEach((meetups, year) => {
    createPage({
      path: `/${ year }`,
      component: path.resolve(`./src/templates/meetups-per-year.js`),
      context: {
        meetups,
        years,
        year,
      },
    })
  })
}
