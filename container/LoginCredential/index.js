import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { emailAndPassword } from 'db/firebase/auth'
import { LoginSchema } from 'helpers/zod/LoginSchema'
import { DEFAULT_VALUES } from 'const/login_default_values'
import { Select, Input, ErrorMessage, Button } from 'components'

export function LoginCredential () {
  const {
    register,
    handleSubmit,
    formState,
    setError
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: DEFAULT_VALUES
  })
  const { isValid, isDirty, errors } = formState
  const onSubmit = data => {
    const { email, password, laboratory } = data
    emailAndPassword({ email, password, laboratory, setError })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type='text'
          errors={errors.email}
          placeholder='Email...'
          {...register('email')}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          type='password'
          errors={errors.password}
          placeholder='Contraseña...'
          {...register('password')}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <Select
          label='Laboratorio: '
          {...register('laboratory')}
        />
        <Button
          isValid={isValid}
          isDirty={isDirty}
        >
          Ingresar
        </Button>
        {
        errors.auth && <ErrorMessage>{errors.auth?.message}</ErrorMessage>
        }
      </form>
    </>
  )
}
