import path from "path";
import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Schema from "./schema";

const SEO = ({ postData, postImage, isBlogPost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta = postData.childMarkdownRemark.frontmatter || {};

      const title = postMeta.title || seo.title;
      const description =
        postMeta.description || postData.excerpt || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
      const url = postMeta.slug
        ? `${seo.siteUrl}${path.sep}${postMeta.slug}`
        : seo.siteUrl;
      const datePublished = isBlogPost ? postMeta.datePublished : false;

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Mobile tags */}
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="HandheldFriendly" content="true" />
          </Helmet>

          <Schema
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            canonicalUrl={seo.canonicalUrl}
            author={seo.author}
            defaultTitle={seo.defaultTitle}
          />
        </React.Fragment>
      );
    }}
  />
);

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
};

export default SEO;
