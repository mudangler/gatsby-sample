module.exports = {
/* Your site config here */
    siteMetadata: {
        title: "ESSENTIALS",
        description: `美味しい食材と食事を探求するサイト`,
        lang: `ja`,
        siteUrl: 'http://localhost:8000',
        locale: `ja_JP`,
        fbappid: `xxxxxxxxxxxxxxxxx`
    },
    plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: `ESSENTIALS エッセンシャルズ`,
          short_name: `ESSENTIALS`,
          start_url: `/`,
          background_color: `#fffff`,
          theme_color: `#477294`,
          display: `standalone`,
          icon: `src/images/icon.png`
        }
      },
      `gatsby-plugin-offline`,
    ],
}
