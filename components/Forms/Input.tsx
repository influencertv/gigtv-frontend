import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
} from 'react'

import * as S from './styled'

type Props = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, ...inputProps },
  ref
) => {
  return (
    <S.InputWrapper>
      {label ? (
        <S.InputLabel>
          <div>{label}</div>
          <S.Input {...inputProps} ref={ref} />
        </S.InputLabel>
      ) : (
        <S.Input {...inputProps} />
      )}
    </S.InputWrapper>
  )
}

export default forwardRef(Input)
