import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,
      backgroundColor: '#f6d59f',
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `0 5px`,
      }}
    >
      {siteTitle}
    </Link>
    <Link
      to="/resume"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `0 5px`,
      }}
    >
      Resume
    </Link>
    <Link
      to="/license-plates"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `0 5px`,
      }}
    >
      License Plates
    </Link>
    <Link
      to="/blog"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        padding: `0 5px`,
      }}
    >
      Blog
    </Link>
  </header>
)

export default Header
