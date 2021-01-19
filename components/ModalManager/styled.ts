import styled from '@emotion/styled'

export const TryOurMobileAppWrapper = styled.div`
  position: relative;
  height: 100%;

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  h2 {
  }

  img {
    position: absolute;
    bottom: 20px;
    right: 0;
  }
`

export const ProfileModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 16px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
  &:focus {
    text-decoration: none;
    outline: none;
  }
`
