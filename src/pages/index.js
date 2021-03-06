import React from "react"
import Layout from "../layouts/layout"
import DeviceScreenshot from "../components/device_screenshot"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const AppShowcase = ({ apps }) => (
  <div>
    <h2>Our Apps</h2>
    <div class = "app-showcase">
    {apps.edges.map(({ node }) => (
      <div>
        <DeviceScreenshot imagesrc = {node.mainScreenshot} />
        <a href={node.mainPageUrl} style = {{textAlign: "center"}}><h3>{node.name}</h3></a>
      </div>
    ))}
    </div>
  </div>
)

const ContactUsForm = props => (
  <div>Email Us: <a href="mailto:contact@raostudios.com<">contact@raostudios.com</a></div>
)

export default ({ data }) => (
  <>
  <SEO
      title="Rao Studios"
      keywords={[`rao studios`, `swift`, `mobile`, `development`, `ios`]}
  />
  <Layout>

    <section>
    <h2>Rao Studios builds the best apps</h2>
    <p>We build products to engage, delight and enhance the human experience.</p>
    </section>

    <section>
    <AppShowcase apps = {data.allAppsJson} />
    </section>  

    <section>
    <h2>How We Help Clients</h2>
    <p>We bring the same attention to detail and care we use to build our products to build your product.</p>
    <p>We closely collaborate with our partners to build great, high quality experiences. We reuse our proven, tested components to get your app off to a fast start. We then dedicate our focus on what makes your app unique. We also share our marketing and engagement data from over 20K users of our apps to help you make great, informed decisions.</p>
    </section>
    
    <section>
    <h2>Blog</h2>
    </section>
    
    <section>
    <h2>Contact Us</h2>
    <ContactUsForm />
    </section>

  </Layout>
  </>
)

export const pageQuery = graphql`
  query {
    allAppsJson {
      edges {
        node {
          name
          mainScreenshot
          mainPageUrl
        }
      }
    }
  }
`
