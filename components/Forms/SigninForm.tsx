import Input from './Input'
import * as S from './styled'
import { useSignin } from '@/lib/hooks/hooks'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const SigninForm = () => {
  const { signin } = useSignin()
  const { register, handleSubmit, errors: formErrors } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ email, password }) => {
    signin(email, password)
  })

  return (
    <S.BoxFormWrapper>
      <S.BoxForm onSubmit={onSubmit}>
        <S.FormTitle>Sign in</S.FormTitle>
        <S.FormErrors>
          {formErrors.email && <div>Please enter valid email</div>}
        </S.FormErrors>
        <Input
          ref={register({
            required: true,
            // TODO: chech email valideness.
          })}
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter your email address"
        />
        <Input
          ref={register({ required: true, min: 6 })}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <S.SubmitButton type="submit">Continue</S.SubmitButton>
      </S.BoxForm>
    </S.BoxFormWrapper>
  )
}

export default SigninForm
