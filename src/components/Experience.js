import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const Experience = props => {
  const {
    image,
    title,
    position,
    startDate,
    endDate,
    description,
    link,
  } = props
  return (
    <div
      css={css`
        background-color: #ffffff;
        cursor: ${link ? "pointer" : "auto"};
        display: grid;
        max-width: 25rem;
        max-height: 25rem;
        border-radius: 15px;
        transition: all 0.5s ease;
        margin: 0.5rem;
        box-shadow: 10px 10px 15px #00000080;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas:
          "image details"
          "description description";
        :hover {
          transform: translate3d(0px, -10px, 0px);
          box-shadow: 15px 15px 20px #00000080;
        }
      `}
      onClick={() => {
        if (link) {
          window.open(link)
        }
      }}
    >
      {image ? (
        <Img
          fixed={image}
          css={css`
            grid-area: "image";
            border-top-left-radius: 15px;
            border-bottom-right-radius: 15px;
          `}
        />
      ) : (
        ""
      )}
      <div
        css={css`
          grid-area: ${image ? "details" : "image"};
        `}
      >
        <h3>{title}</h3>
        <h4>{position}</h4>
        <h4>{startDate ? `${startDate} - ${endDate}` : ""}</h4>
      </div>

      <p
        css={css`
          grid-area: description;
        `}
      >
        {description}
      </p>
    </div>
  )
}

export default Experience
