import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Input from './Input'
import * as S from './styled'
import { useSignup } from '@/lib/hooks/hooks'

type Inputs = {
  username: string
  email: string
  password: string
}

const SignupForm = () => {
  const [error, setError] = useState(null)
  const { signup } = useSignup()
  const { register, handleSubmit, errors: formErrors } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ username, email, password }) => {
    try {
      signup(username, email, password)
    } catch (e) {
      setError(e)
    }
  })

  return (
    <S.BoxFormWrapper>
      <S.BoxForm onSubmit={onSubmit}>
        <S.FormTitle>Sign up</S.FormTitle>
        <S.FormErrors>
          {error && error.toString()}
          {formErrors.email && <div>Please enter valid email</div>}
        </S.FormErrors>
        <Input
          ref={register({ required: true })}
          name="username"
          type="text"
          label="Your full name"
          placeholder="Enter you first and last name"
          autoComplete="off"
        />
        <Input
          ref={register({
            required: true,
            // TODO: validate email.
          })}
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter your email address"
          autoComplete="off"
        />
        <Input
          ref={register({ required: true, min: 6 })}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="new-password"
        />
        <S.SubmitButton type="submit">Continue</S.SubmitButton>
      </S.BoxForm>
    </S.BoxFormWrapper>
  )
}

export default SignupForm
