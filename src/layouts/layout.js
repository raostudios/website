import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import logo from "../images/logo.png"
import twitterIcon from "../images/twitter.svg"
import githubIcon from "../images/github.png"
import appStoreIcon from "../images/appstore.svg"


import Helmet from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


const Header = ({ data }) => (
  <header style={{ marginBottom: `1.5rem` }}>

  <Link to="/" style={{ textShadow: `none`, backgroundImage: `logo.png` }}>
    <img src={logo} alt="logo" style={{ display: `inline`, width: `10%` }}/>
  </Link>

  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/preset/">Preset</ListLink>
    <ListLink to="/big-clock/">Big Clock</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
  </ul>
  </header>
)


const Footer = ({ links }) => (
  <footer>
      Rao Studios c 2011
       
          <a href={'https://itunes.apple.com/us/developer/' + links.app_store}><img src = {appStoreIcon} alt = ""/></a>
          <a href={'https://www.twitter.com/' + links.twitter}><img src = {twitterIcon} alt = "" /></a>
          <a href={'https://www.github.com/' + links.github}><img src = {githubIcon} alt = "" /></a>
      
  </footer>
)


export default ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            links {
              app_store
              twitter
              github
            }
          }
        }
      }
    `
    } render = { data => (
  <>
  <Helmet meta={[
    {
      name: `viewport`,
      content: "width=device-width, initial-scale=1",
    }
  ]}>
  </Helmet>

  <div style={{ margin: `3rem auto`, maxWidth: 1024, padding: `0 0rem` }}>
    <Header />
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 0rem` }}>
      {children}
    </div>
    <Footer links = {data.site.siteMetadata.links}/>  
  </div>
  </>
    )}
    />
)
