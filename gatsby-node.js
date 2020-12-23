const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        body
                        title
                    }
                }
            }
        }
    }
    `).then((result) => {
        if(result.errors){
            result.errors.forEach((e) => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((edge) => {
            const id = edge.node.id
            createPage({
                path: edge.node.fields.slug,
                tags: edge.node.frontmatter.tags,
                // component: path.resolve(
                //     `src/templates`
                // )
                context: {
                    id,
                }
            })
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    // fmImagesToRelative(node) // convert image paths for gatsby images
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }