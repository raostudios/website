import React from "react"
import { graphql, StaticQuery, withPrefix } from "gatsby"

import Layout from "./layout"
import DeviceScreenshot from "../components/device_screenshot"
import AppStoreBadge from '../images/Download_on_the_App_Store_Badge.svg'

import SEO from "../components/seo"

const AppStoreButton = ({ appId }) => (
  <a href = {'https://itunes.apple.com/app/apple-store/id' + appId + '?pt=1507981&ct=landing_page&mt=8'}> 
    <img class = "app-store-badge" src = {AppStoreBadge} alt=""/> 
  </a>
)

const currentApp = (data, name) => {
   return data.allAppsJson.edges.filter(edge => edge.node.name === name)[0].node 
}

export default ({ name, children}) => (
  <StaticQuery
    query={graphql`
      query {
        allAppsJson {
          edges {
            node {
              name
              tagLine
              icon
              mainScreenshot
              mainPageUrl
              tintColor
              appleAppId
              mainVideo {
                url
              }
              description
            }
          }
        }
      }
    `
    } render = { data => (
      <>
      <SEO
          title={currentApp(data, name).name}
          keywords={[`blog`, `rao studios`, `swift`, `mobile`]}
          description={currentApp(data, name).description}
      />
      <Layout>
      <div class="main-app-header" style =  {{ backgroundColor: currentApp(data, name).tintColor, textAlign: "center" }} >
        <h1>{currentApp(data, name).name}</h1>
        <h4>{currentApp(data, name).tagLine}</h4>
        <img class = "app-icon" src = {withPrefix(currentApp(data, name).icon)} alt = ""/>
        <DeviceScreenshot videourl = { currentApp(data, name).mainVideo.url }/> 
        <AppStoreButton appId = { currentApp(data, name).appleAppId }/>
      </div>

      {children}
      
    </Layout>    
    </>
    )
  }
  />
)