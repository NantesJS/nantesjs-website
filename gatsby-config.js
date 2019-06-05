const {
  convertDate,
  formatContent
} = require('./rss');

const options = {
  siteMetadata: {
    title: 'NantesJS - Communauté nantaise des utilisateurs de JavaScript',
    siteUrl: 'https://nantesjs.org',
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp', {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nantesjs',
        short_name: 'nantesjs',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-transformer-remark', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/datas/meetups`,
      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    }, {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [{
          serialize: ({
            query: {
              site,
              allMarkdownRemark
            }
          }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: convertDate(edge.node.frontmatter.date),
                url: site.siteMetadata.siteUrl,
                guid: edge.node.frontmatter.id,
                custom_elements: [{
                  "content:encoded": formatContent(edge.node.frontmatter)
                }],
              })
            })
          },
          query: `
              {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        id
                        title
                        date
                        talks {title description speakers { name link }}
                        sponsor { name link }
                        venue { name link postal_code address city }
                        ticketsUrl
                      }
                    }
                  }
                }
              }
            `,
          output: "/rss.xml",
          title: "NantesJS RSS Feed",
        }, ]
      },
    },
  ]
}

module.exports = options
