import React from "react"
import { css } from "react-emotion"
import { StaticQuery, graphql, Link } from "gatsby"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Helmet } from "react-helmet"

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
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    `}>

      <Helmet>
        <meta charSet="utf-8"/>
        <title>My Title</title>
        <link rel="canonical" href="https://erictleung.com" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
      </Helmet>

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

      <div className={css`
        flex-grow: 1;
      `}>
        {children}
      </div>

      <footer className={css`
        height: 50px;
        margin: 4em 0 0;
        padding: 2em 0;
        text-align: center;
        flex-shrink: 0;
      `}>

        <div className={css`
          display: block;
        `}>

          <IconContext.Provider value={{ size: "2em" }}>
            <FaGithub />
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "2em" }}>
            <FaTwitter />
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "2em" }}>
            <FaLinkedin />
          </IconContext.Provider>

          </div>
        </footer>

    </div>
  )}
  />
)
