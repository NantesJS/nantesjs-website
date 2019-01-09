const options = {
  siteMetadata: {
    title: 'NantesJS - Communauté nantaise des utilisateurs de JavaScript',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nantesjs',
        short_name: 'nantesjs',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path:`${ __dirname }/datas/meetups`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NantesJS',
        short_name: 'NantesJS',
        start_url: '/',
        background_color: `#f7f0eb`,
        theme_color: '#a2466c',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ]
}

module.exports = options
