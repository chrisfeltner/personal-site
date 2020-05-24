import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Intro = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "IMG_7402.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap-reverse;
        height: 100vh;
      `}
    >
      <div className="intro-text">
        <h1>Hi! I'm Chris 👋</h1>
        <p>
          University of Central Florida ● Computer Science ● Political Science ●
          International Engineering
        </p>
      </div>
      <div className="intro-image">
        <Img
          css={css`
            border-radius: 50%;

            @media only screen and (max-width: 600px) {
              min-width: 50vh;
            }
            @media only screen and (max-width: 900px) {
              min-width: 30vh;
            }
            @media only screen and (min-width: 901px) {
              min-width: 40vw;
            }
          `}
          fluid={data.file.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default Intro
