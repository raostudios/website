import React from "react"
import Layout from "../layouts/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default ({data}) => (
  
  <Layout>
    <SEO
          title="All posts"
          keywords={[`blog`, `rao studios`, `swift`, `mobile`]}
     />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug} style = {{ padding: "1em 1em" }}>
          <h3 style= {{marginBottom: "4px" }}>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <h5 style= {{marginTop: "4px" }}>
            {node.frontmatter.date}
          </h5>

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