import styled from '@emotion/styled'

type HeroProps = {
  backgroundImage: string
}

export const Hero = styled.div<HeroProps>`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  h2 {
    color: #fff;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  }
`
