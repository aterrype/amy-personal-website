import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.wrapper}>
      <StaticImage
        src="../images/amy_terry_penak.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Amy Terry-Penak"
        style={{
          marginBottom: `var(--space-3)`,
          display: "inline-block",
        }}
      />
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Amy Terry-Penak
        </h1>
        <h2 className={styles.heading}>
          Software Developer
        </h2>
        <h3 className={styles.heading}>
          React &middot; Ruby on Rails &middot; Elixir
        </h3>
      </div>
      <p className={styles.intro}>
        Welcome! I'm a software developer who primarily works in Ruby on Rails on the backend, React on the frontend,
        and Elixir when I want to do functional programming. I also do hybrid mobile development with React&nbsp;Native and Ionic.
        Over the course of my career, I've worked with a lot more languages than that; I've done projects in Angular,
        vanilla JavaScript, NodeJS, C#, Visual Basic, Haskell, and Python. I even worked on a&nbsp;
        <a href="https://en.wikipedia.org/wiki/MUMPS">MUMPS</a> database for a while &ndash; seriously, I'll use any language
        if it's called for. Have a look at my <Link to="/resume">resume</Link> if you want to learn more about my career.
      </p>
      <p className={styles.intro}>
        When I'm not programming, I'm probably having fun with one of my many hobbies. I collect license plates, and&nbsp;
        <Link to="/license-plates">a section of this website</Link> is dedicated to my collection. I also enjoy travel,
        and one of my goals in life is to visit all of the 3,100+ counties in the United States.
      </p>
      <p className={styles.intro}>
        If you're interested in my thoughts on programming, my hobby-related adventures, or just what I've been up to,
        feel free to take a look at my <Link to="/blog">blog</Link>.
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
