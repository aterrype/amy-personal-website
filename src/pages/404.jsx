import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>The page you were looking for doesn&apos;t exist.</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;
