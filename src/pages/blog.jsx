import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

function BlogIndex({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .map((edge) => (
      <div key={edge.node.id}>
        <h2>
          <Link to={`.${edge.node.frontmatter.path}`}>
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <h3>{edge.node.frontmatter.date}</h3>
        <p>{edge.node.excerpt}</p>
      </div>
    ));

  return (
    <Layout>
      <h1>Blog</h1>
      <div>
        {Posts}
      </div>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
  `;
