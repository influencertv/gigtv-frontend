import styled from '@emotion/styled'

export const BoxFormWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxForm = styled.form`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 350px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 3px rgba(100, 100, 100, 0.2);
  padding-top: 30px;
  padding-bottom: 30px;
`

export const FormTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`

export const InputWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  div {
    margin-bottom: 7px;
    color: ${props => props.theme.fontColors.darkGrey};
  }

  input {
    width: 100%;
    outline: none;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    border: 1px solid ${props => props.theme.fontColors.grey};
    color: ${props => props.theme.fontColors.darkGrey};

    &::placeholder {
      color: ${props => props.theme.fontColors.grey};
    }
  }
`

export const Input = styled.input``

export const InputLabel = styled.label``

export const SubmitButton = styled.button`
  display: block;
  width: 80%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${props => props.theme.colors.secondary};
  padding-top: 9px;
  padding-bottom: 9px;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: ${props => props.theme.colors.secondaryLight};
  }
`

export const FormErrors = styled.div`
  text-align: center;
  margin-bottom: 10px;
  color: red;
`
