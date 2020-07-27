import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>This Page does absolutely nothing...</p>
    <p>
      Look for the ./gatsby-node.js file to see where the magic (in terms of
      this <a href="https://google.de">blog-post</a>) happens.
    </p>
    <p>
      run the build command and look for the f1teams.json file. (also avialable
      via <Link to="/f1-teams.json">this URL</Link>)
    </p>
  </Layout>
)

export default IndexPage
