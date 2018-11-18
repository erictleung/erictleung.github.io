module.exports = {
  siteMetadata: {
    title: `Eric T Leung's Personal Website`,
    siteUrl: `https://erictleung.com`,
    description: `Eric T Leung is a PhD candidate in biomedical informatics and
    microbiome science`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `About`,
        link: `/about`
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-copy-linked-files"]
      }
    },
    `gatsby-transformer-sharp`,
  ]
}
