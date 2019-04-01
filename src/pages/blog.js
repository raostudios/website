import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default ({data}) => (
  
  <Layout>
    <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
     />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { status: { eq: "published" }}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`