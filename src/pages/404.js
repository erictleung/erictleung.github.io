import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>404 Page No Found</h1>
        <p>
          Oh bother! Sorry, we've misplaced that URL or it's pointing to
          something that doesn't exist. <Link to="/">Head back home</Link> to
          try finding it again.
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage
