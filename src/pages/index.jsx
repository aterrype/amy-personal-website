import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

function IndexPage() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <StaticImage
          src="../images/amy_terry_penak.jpg"
          loading="eager"
          width={300}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Amy Terry-Penak"
          className={styles.headerImage}
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
          Welcome! I&apos;m a software developer who primarily works in Ruby on Rails on the
          backend, React on the frontend, and Elixir when I want to do functional programming.
          I also do hybrid mobile development with React&nbsp;Native and Ionic. Over the course
          of my career, I&apos;ve worked with a lot more languages than that; I&apos;ve done
          projects in Angular, vanilla JavaScript, NodeJS, C#, Visual Basic, Haskell, and Python.
          I even worked on a&nbsp;
          <a href="https://en.wikipedia.org/wiki/MUMPS">MUMPS</a>
          {' '}
          database for a while &ndash; seriously, I&apos;ll use any language
          if it&apos;s called for. Have a look at my&nbsp;
          <Link to="/resume">resume</Link>
          {' '}
          if you want to learn more about my career.
        </p>
        <p className={styles.intro}>
          When I&apos;m not programming, I&apos;m probably having fun with one of my many hobbies.
          I collect license plates, and&nbsp;
          <Link to="/license-plates">a section of this website</Link>
          {' '}
          is dedicated to my collection. I also enjoy travel,
          and one of my goals in life is to visit all of the 3,100+ counties in the United States.
        </p>
        <p className={styles.intro}>
          If you&apos;re interested in my thoughts on programming, my hobby-related adventures,
          or just what I&apos;ve been up to,
          feel free to take a look at my
          {' '}
          <Link to="/blog">blog</Link>
          .
        </p>
      </div>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="Home" />;
}

export default IndexPage;
