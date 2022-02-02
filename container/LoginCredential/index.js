import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { LoginSchema } from 'helpers/zod/LoginSchema'
import { DEFAULT_VALUES } from 'const/login_default_values'
import { signIn } from 'next-auth/react'
import { Input, Button, ErrorMessage } from 'components'
import { useRouter } from 'next/router'
import { URL_CALLBACK } from 'const/config'
import { useState } from 'react'
export function LoginCredential ({ provider }) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState, setError } = useForm({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: DEFAULT_VALUES
  })
  const { errors } = formState
  const router = useRouter()

  const onSubmit = ({ email, password }) => {
    setLoading(true)
    signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: `${URL_CALLBACK}`
    })
      .then(res => {
        if (res.ok) return router.push(res.url)
        if (!res.ok) {
          setLoading(false)
          return setError('password', {
            message: 'Contraseña incorrecta.',
            error: '401'
          })
        }
      })
      .catch(e => {
        setLoading(false)
        return setError('password', {
          message: 'Contraseña incorrecta.',
          error: '401'
        })
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Input type='hidden' {...register('csrfToken')} /> */}
        <input type='hidden' {...register('csrfToken')} />
        <Input
          type='text'
          errorHeight
          errors={errors.email}
          placeholder='example@gmail.com'
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
          {...register('password')}
        >
          Contraseña
        </Input>
        <Button isValid isDirty>
          {loading ? 'Verificando...' : 'Iniciar Sesión'}
        </Button>
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      </form>
      <style jsx>
        {`
          form {
            min-width: 220px;
            margin: 0 auto;
            height: 310px;
            opacity: ${loading ? '.35' : 'inherit'};
            pointer-events: ${loading ? 'none' : 'auto'};
          }
        `}
      </style>
    </>
  )
}
