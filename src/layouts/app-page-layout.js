import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "./layout"
import DeviceScreenshot from "../components/device_screenshot"
import logo from "../images/apps/preset/logo.png"
import AppStoreBadge from '../images/Download_on_the_App_Store_Badge.svg'

const AppStoreButton = ({ appId }) => (
  <a href = {'https://itunes.apple.com/app/apple-store/id' + appId + '?pt=1507981&ct=landing_page&mt=8'}> 
    <img class = "app-store-badge" src = {AppStoreBadge} alt=""/> 
  </a>
)

export default ({ name, children}) => (
  <StaticQuery
    query={graphql`
      query {
        allAppsJson(filter: {name: {eq: "Preset"}}) {
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
            }
          }
        }
      }
    `
    } render = { data => (
      <Layout>
      
      <div class="main-app-header" style =  {{ backgroundColor: '#cccccc' }} >
        <h3>{data.allAppsJson.edges[0].node.name}</h3>
        <h4>{data.allAppsJson.edges[0].node.tagLine}</h4>
        <img class = "app-icon" src = {logo} alt = ""/>
        <DeviceScreenshot videourl = { data.allAppsJson.edges[0].node.mainVideo.url }/> 
        <AppStoreButton appId = { data.allAppsJson.edges[0].node.appleAppId }/>
      </div>

      {children}
      
    </Layout>    
    )
  }
  />
)