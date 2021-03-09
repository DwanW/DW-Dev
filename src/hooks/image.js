import { useStaticQuery, graphql } from "gatsby"

export const useImageData = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 500)
            }
          }
        }
      }
    }
  `)
  return data
}
