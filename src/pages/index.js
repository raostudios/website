import React from "react"
import Layout from "../components/layout"
import { withPrefix } from 'gatsby'

const AppShowcase = ({ apps }) => (
  <div>
    <h1>Our Apps</h1>
    {apps.edges.map(({ node }) => (
      <div class="col-3">
        <DeviceScreenshot imagesrc = {node.main_screenshot} />
        <a href={node.main_page_url}><h3>{node.name}</h3></a>
      </div>
    ))}
  </div>
)

const DeviceScreenshot = ({ imagesrc }) => (
  <div class = "iphone-container">
    <div class = "iphone-frame">
      <img src = {withPrefix(imagesrc)} alt="screenshot"  class = "partner-img" />
    </div>
  </div>
)

const ContactUsForm = props => (
  <div></div>
)


export default ({ data }) => (
  <Layout title='Rao Studios Home'>

    <section>
    <h1>Rao Studios builds the best apps</h1>
    <p>We build products to engage, delight and enhance the human experience.</p>
    </section>

    <section>
    <AppShowcase apps = {data.allAppsJson} />
    </section>  

    <section>
    <h1>How we help clients</h1>
    <p>Augment your team</p>
    </section>
    
    <section>
    <h1>Blog</h1>
    </section>
    
    <section>
    <h1>Contact Us</h1>
    <ContactUsForm />
    </section>

  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allAppsJson {
      edges {
        node {
          name
          main_screenshot
          main_page_url
        }
      }
    }
  }
`
