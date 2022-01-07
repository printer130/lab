import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { LoginSchema } from 'helpers/zod/LoginSchema'
import { DEFAULT_VALUES } from 'const/login_default_values'
import { signIn } from 'next-auth/react'
import { Input, Button, ErrorMessage } from 'components'
import { useRouter } from 'next/router'
import { URL_CALLBACK } from 'const/config'
export function LoginCredential ({ csrfToken, provider }) {
  const { register, handleSubmit, formState, setError } = useForm({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: DEFAULT_VALUES
  })
  const { isValid, isDirty, errors } = formState
  const router = useRouter()

  const onSubmit = ({ email, password }) => {
    signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: `${URL_CALLBACK}`
    })
      .then(res => {
        if (res.ok) return router.push(res.url)
      })
      .catch(e =>
        setError('password', {
          message: 'Contraseña incorrecta',
          error: e.message
        })
      )
  }

  // const onSubmit = (data) => {
  //   const { email, password } = data
  //   loginWithCredentials({ email, password, setError })
  //     .then((res) => {
  //       router.replace(`${URL_CALLBACK}`)
  //     })
  // }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='hidden' {...register('csrfToken')} />
        <Input
          type='text'
          errorHeight
          errors={errors.email}
          placeholder='example@gmail.com'
          image='/svg/email.svg'
          {...register('email')}
        >
          Correo Electronico
        </Input>
        <Input
          type='password'
          errorHeight
          autoComplete
          errors={errors.password}
          placeholder='Contraseña...'
          image='/svg/password.svg'
          {...register('password')}
        >
          Contraseña
        </Input>
        <Button isValid={isValid} isDirty={isDirty}>
          Ingresar con {provider.name}
        </Button>
        <ErrorMessage>{errors?.auth?.message}</ErrorMessage>
      </form>
      <style jsx>
        {`
          form {
            min-width: 220px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}
