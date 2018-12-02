import React from "react";
import { graphql } from "gatsby"

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      I'm currently a fith year PhD candidate at Oregon Health &amp; Science
      University. My research interests are in developing novel computational
      methods in order to better our understanding about how the human
      microbiome plays a role in health and disease.
    </p>

    <p>
      I will generally blog about code, data, and the human microbiome. These
      posts will be advice and notes for my previous self in order to help my
      future self. I hope you're able to take away something from it as well.
    </p>

    <p>
      Previously, I was at the University of Oklahoma, here I recieved dual
      Bachelor degrees in biochemistry and mathematics.
    </p>

    <p>
      In my free time, I like to learn about the world, contribute to
      open-source projects, volunteer locally, and learn foreign languages and
      programming languages.
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
