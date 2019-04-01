import React from "react"
import Layout from "../components/layout"

export default ({ name, children }) => (
  <Layout>
    <p>
      {name} Under construction!
    </p>

    {children}
  </Layout>
)