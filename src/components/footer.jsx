import * as React from 'react';

import './footer.css';

function Footer() {
  return (
    <footer
      style={{
        marginTop: 'var(--space-5)',
        padding: 'var(--space-4) var(--size-gutter)',
        fontSize: 'var(--font-sm)',
        backgroundColor: '#f6d59f',
      }}
    >
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      unless otherwise stated &middot; Built with
      {' '}
      <a href="https://www.gatsbyjs.com">Gatsby</a>

      <a className="social" href="https://www.facebook.com/amy.terrypenak/">
        Facebook
        {/* <img src="../images/facebook.png" alt="Facebook" /> */}
      </a>
      <a className="social" href="https://www.linkedin.com/in/amy-terry-penak-a5b24495/">
        LinkedIn
        {/* <img src="../images/linkedin.png" alt="LinkedIn" /> */}
      </a>
      <a className="social" href="https://github.com/aterrype/">
        GitHub
        {/* <img src="../images/github.png" alt="GitHub" /> */}
      </a>
    </footer>
  );
}

export default Footer;
