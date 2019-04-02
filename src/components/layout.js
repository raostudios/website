import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
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


const Footer = ({ data }) => (
  <footer>
      <p>Rao Studios c 2011</p>
      <div> 
        Twitter
            App Store
            LinkedIn
            Github
      </div>
    </footer>
)


export default ({ children }) => (
  <>
  <Helmet meta={[
    {
      name: `viewport`,
      content: "width=device-width, initial-scale=1",
    }
  ]}>
  </Helmet>
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
  <Header />
    {children}
  <Footer />
    
  </div>
  </>
)