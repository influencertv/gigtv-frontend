import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.info};
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  > *:first-of-type {
    margin-right: 20px;
  }
`

export const Button = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  outline: none;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`
