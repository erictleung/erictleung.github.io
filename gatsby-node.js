const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Finds file node, extend node, and creates slug
  if (node.internal.type === `MarkdownRemark`) {

    // Create the URL for the page
    const slug = createFilePath({
      // node = node you'd like to convert to a path
      node,
      // getNode = method to get node
      getNode,
      // basePath = base path for your files
      basePath: `pages`,
      // Trailing "/" or not
      trailingSlash: false
    })

    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL
            // variables
            slug: node.fields.slug
          },
        })
      })
      resolve()
    })
  })
}
