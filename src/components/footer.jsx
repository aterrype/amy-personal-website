import * as React from 'react';

import './footer.css';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.png';
import facebook from '../images/facebook.svg';

function Footer() {
  return (
    <footer
      className="footer"
    >
      <div className="disclaimer">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        unless otherwise stated &middot; Built with
        {' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>

      <div className="socialContainer">
        <a className="social" href="https://github.com/aterrype/">
          <img src={github} height="25px" alt="GitHub" />
        </a>
        <a className="social" href="https://www.linkedin.com/in/amy-terry-penak-a5b24495/">
          <img src={linkedin} height="25px" alt="LinkedIn" />
        </a>
        <a className="social" href="https://www.facebook.com/amy.terrypenak/">
          <img src={facebook} height="25px" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
