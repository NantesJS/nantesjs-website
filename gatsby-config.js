const options = {
  siteMetadata: {
    title: 'NantesJS - Communauté nantaise des utilisateurs de JavaScript',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-leaflet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nantesjs',
        short_name: 'nantesjs',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}

module.exports = options
