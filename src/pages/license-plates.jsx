import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/license-plates.module.css';

function LicensePlatesPage() {
  return (
    <Layout>
      <h1 className={styles.heading}>Amy&apos;s License Plates</h1>
      <div className={styles.imageWrapper}>
        <StaticImage
          src="../images/alpca-9495.jpg"
          loading="eager"
          width={300}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Amy Terry-Penak"
          className={styles.image}
        />

      </div>
      <p className={styles.bodyText}>
        When I&apos;m not at work, I like to spend my time collecting license plates.
        As a child, I always tried to spot as many different state license plates as I could on
        family vacations. After hearing about this, my neighbor at the time gave me one of his
        old license plates, and my collection was born from there. I lost interest after a few
        years, but I got back into collecting as an adult. (Partly because I had more time and
        money for it, partly because my parents wanted me to get the old license plates out of
        their house.)
      </p>
      <p className={styles.bodyText}>
        Why license plates? There are a number of reasons: I like to travel, I like history, and
        I like to pay attention to everyday things that not everyone takes a second look at. I
        collect many different types of license plates, but my main areas of focus are my home
        state of Wisconsin and specialty graphic plates related to nature and the environment.
      </p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="License Plates" />;
}

export default LicensePlatesPage;
