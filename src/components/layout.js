import React from "react"
import { Link } from "gatsby"
import logo from "./logo.png"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>

      <Link to="/" style={{ textShadow: `none`, backgroundImage: `logo.png` }}>
        <img src={logo} style={{ display: `inline`, width: `10%` }}/>
      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/preset/">Preset</ListLink>
        <ListLink to="/big-clock/">Big Clock</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
      </ul>
    
    <title>this.props.title</title>
    
    </header>
    
    {children}
  </div>
)