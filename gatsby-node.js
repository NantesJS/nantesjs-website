const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const he = require('he')
const { format, parse } = require('date-fns')
const { fr } = require('date-fns/locale')
const handlebars = require('handlebars')

const {
  createFilePath
} = require(`gatsby-source-filesystem`)

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env.${ process.env.NODE_ENV }`,
})

exports.onCreateNode = async ({
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

    const {
      frontmatter: {
        title,
        id,
        date,
        sponsor,
        venue,
        ticketsUrl,
        talks,
      }
    } = node

    const source = fs.readFileSync(
      path.join(__dirname, './affiche.template.html')
    ).toString('utf8')
    const template = handlebars.compile(source)

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    const meetupDate = parse(date, 'dd/MM/yyyy', new Date())
    await page.setContent(template({
      title,
      day: format(meetupDate, 'dd', { locale: fr }),
      month: format(meetupDate, 'MMM', { locale: fr }),
      sponsor: sponsor ? sponsor.name : 'NantesJS',
      venue: venue ? venue.name : '',
      ticketsUrl,
      talks: talks.map(talk => {
        talk.description = talk.description ? he.decode(talk.description) : ''
        talk.title = he.decode(talk.title)
        talk.speakers = talk.speakers.map((speaker, index) => {
          // Gérer pas de link
          const linkParts = speaker.link.split('/')
          speaker.handle = linkParts.pop()

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
    const elements = await page.$$('html')
    const element = elements[0]
    await element.screenshot({ path: `./public/${ id }.png` })

    await browser.close()
  }
}
