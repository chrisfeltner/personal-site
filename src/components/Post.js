import React from "react"

const Post = props => {
  const { image, title, date, summary } = props
  return (
    <div
      css={css`
        background-color: #ffffff;
        display: grid;
        max-width: 25rem;
        max-height: 25rem;
        border-radius: 15px;
        margin: 0.5rem;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas:
          "image details"
          "summary summary";
      `}
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
        <h4>{date}</h4>
      </div>

      <p
        css={css`
          grid-area: summary;
        `}
      >
        {summary}
      </p>
    </div>
  )
}

export default Post
