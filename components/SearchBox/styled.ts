import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.form`
  display: flex;
  margin-right: 20px;
`

type InputProps = {
  opened: boolean
}

export const Input = styled.input<InputProps>`
  width: ${props => (props.opened ? '160px' : '0')};
  transition: width 0.25s cubic-bezier(0.49, 0.37, 0.445, 0.715);
  border: 0;
  padding: 2px 0;
  outline: none;
  -webkit-appearance: none;
  box-shadow: none !important;
  font-size: 14px;
  height: 34px;
  line-height: 20px;
  text-indent: 0;
  border-radius: 4px;
  background-color: #f0f0f0;
  display: initial;
  color: #555;
  padding-left: ${props => (props.opened ? '10px' : '0')};
`

type SearchProps = {
  opened: boolean
}

export const Search = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.opened
      ? css`
          background-color: transparent;
          color: #1f1f1f;
          font-size: 16px;
          margin-right: -36px;
          padding: 0 10px;
          position: relative;
          right: 40px;
        `
      : css`
          background-color: ${props.theme.colors.primaryLighter};
          border: 1px solid #444;
          color: #f0f0f0;
          padding: 9px 10px;
          border-radius: 4px;
        `}
`
