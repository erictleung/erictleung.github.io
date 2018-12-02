module.exports = {
  siteMetadata: {
    title: 'Eric Leung',
    author: 'Eric Leung',
    siteUrl: `https://erictleung.com`,
    description: `
      Eric T Leung is a PhD candidate in biomedical informatics and microbiome
      science.
    `,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
    ],
    social: {
      twitter: 'https://twitter.com/erictleung',
      linkedin: 'https://www.linkedin.com/in/erictleung/',
      github: 'https://github.com/erictleung',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-reading-time`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Eric Leung's Personal Website",
        short_name: "Eric Leung",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/assets/site-favicon.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ]
}
