import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Header = props => {
  const linkStyle = css`
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 24pt;
    font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    color: black;

    :visited {
      color: black;
    }
  `

  return (
    <header
      css={css`
        background-color: hsl(203, 39%, 44%);
        min-height: 4rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
      `}
    >
      <Link to="/" css={linkStyle}>
        Home
      </Link>
      <Link to="/thoughts" css={linkStyle}>
        Thoughts
      </Link>
      <Link to="/contact" css={linkStyle}>
        Contact
      </Link>
    </header>
  )
}

export default Header
