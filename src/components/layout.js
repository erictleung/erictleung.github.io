import React from "react"
import { css } from "react-emotion"
import { StaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

  render={data => (
    <div className={css`
      margin: 0 auto;
      maxWidth: 650;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
      `}>

      <header style={{ marginBottom: `1.5rem` }}>

        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>

      {children}

    </div>
  )}
  />
)
