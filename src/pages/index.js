import React from "react"
import Intro from "../components/Intro"
import Experience from "../components/Experience"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import Particles from "react-particles-js"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          currentWork {
            title
            position
            startDate
            endDate
            description
            link
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          pastWork {
            title
            position
            startDate
            endDate
            description
            link
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { currentWork, pastWork } = data.allDataJson.nodes[0]
  return (
    <div>
      <Particles
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: true,
            },
            move: {
              random: true,
              speed: 1,
            },
          },
        }}
      />
      <Intro />
      <h2>What I'm Up To</h2>
      <div
        className="current-work"
        css={css`
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        `}
      >
        {currentWork.map(
          ({
            image,
            title,
            position,
            startDate,
            endDate,
            description,
            link,
          }) => (
            <Experience
              key={title}
              image={image ? image.childImageSharp.fluid : null}
              title={title}
              position={position}
              startDate={startDate}
              endDate={endDate}
              description={description}
              link={link ? link : null}
            />
          )
        )}
      </div>
      <h2>Where I've Worked</h2>
      <div
        className="past-work"
        css={css`
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        {pastWork.map(
          ({
            image,
            title,
            position,
            startDate,
            endDate,
            description,
            link,
          }) => (
            <Experience
              key={title}
              image={image ? image.childImageSharp.fluid : null}
              title={title}
              position={position}
              startDate={startDate}
              endDate={endDate}
              description={description}
              link={link ? link : null}
            />
          )
        )}
      </div>
      <div>
        <h2>Let's Connect!</h2>
        <p>
          <a href="https://www.instagram.com/cfeltner98/">Instagram</a> |{" "}
          <a href="https://www.linkedin.com/in/itschrisfeltner/">Linkedin</a> |{" "}
          <a href="mailto:cfeltner98@gmail.com">Email</a> |{" "}
          <a href="">Resume</a>
        </p>
      </div>
    </div>
  )
}
