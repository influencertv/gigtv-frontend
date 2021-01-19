import styled from '@emotion/styled'

export const Wrapper = styled.form`
  display: flex;
`

export const SearchIconWrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  height: 40px;
  border-right: 0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const Input = styled.input`
  height: 40px;
  font-size: 18px;
  background-color: #f0f0f0;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-left: 0;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: #555;
  outline: none;
`

export const SearchButton = styled.button`
  color: #fff;
  background-color: ${props => props.theme.colors.secondary};
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border: 0;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`
