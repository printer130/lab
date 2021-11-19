import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { emailAndPassword } from 'db/firebase/auth'
import { LoginSchema } from 'helpers/zod/LoginSchema'
import { DEFAULT_VALUES } from 'const/login_default_values'
import { Select, Input, ErrorMessage, Button } from 'components'
import { ctxUser } from 'hooks/ctxUser'

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
  const { onLab } = ctxUser()
  const onSubmit = data => {
    const { email, password, laboratory } = data
    onLab(laboratory)
    emailAndPassword({ email, password, setError })
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
        >Correo Electronico
        </Input>
        <Input
          type='password'
          errors={errors.password}
          placeholder='Contraseña...'
          {...register('password')}
        >Contraseña
        </Input>
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
      <style jsx>{`
        form {
        }
      `}
      </style>
    </>
  )
}
