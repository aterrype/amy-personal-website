import * as React from 'react';
import { Link } from 'gatsby';

import './header.css';

function Header({ siteTitle }) {
  return (
    <header
      style={{
        margin: '0 auto',
        padding: 'var(--space-4) var(--size-gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f6d59f',
      }}
    >
      <Link
        to="/"
        className="menuLink"
      >
        {siteTitle}
      </Link>
      <Link
        to="/resume"
        className="menuLink"
      >
        Resume
      </Link>
      <Link
        to="/license-plates"
        className="menuLink"
      >
        License Plates
      </Link>
      <Link
        to="/blog"
        className="menuLink"
      >
        Blog
      </Link>
    </header>
  );
}

export default Header;
