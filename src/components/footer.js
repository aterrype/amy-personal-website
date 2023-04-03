import * as React from "react"

const Footer = () => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      padding: `var(--space-4) var(--size-gutter)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} unless otherwise stated &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer
