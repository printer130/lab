/* eslint-disable react/jsx-closing-tag-location */
import { useContext } from 'react'
import { UserContext } from 'hooks/useUserContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { z } from 'zod'
import { USER_STATES } from 'const/user_states'

const schema = z.object({
  ci: z.number().int(),
  fullName: z.string(),
  birth: z.date(),
  phone: z.number(),
  nit: z.number({
    description: 'Se espera un número',
    invalid_type_error: 'Numero inválido',
    required_error: 'Campo requerido'
  }).int({ message: 'Numero mal' }),
  socialReason: z.string().min(3, {
    message: 'Campo requerido'
  })
})

const defaultValues = {
  ci: '',
  fullName: '',
  birth: '',
  phone: '',
  nit: '',
  socialReason: ''
}

export default function Registro () {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    isSubmitSuccessful,
    isSubmitting
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues,
    reValidateMode: 'onChange'
  })

  const { user } = useContext(UserContext)

  const onSubmit = data => {
    console.log(errors)
    console.log(data)
  }

  return (
    <>
      {
        user !== USER_STATES.NOT_KNOW
          ? <div>
            <h1>{user?.email}</h1>
          </div>
          : <div> Loading...</div>
      }
      <div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={errors.ci ? 'input-error' : ''}
            type='number'
            placeholder='C.I.'
            {...register('ci', {
              valueAsNumber: true
            })}
          />
          <small>{errors.ci?.message}</small>

          <input
            className={errors.fullName ? 'input-error' : ''}
            type='text'
            placeholder='Nombre Completo...'
            {...register('fullName')}
          />
          <small>{errors.fullName?.message}</small>

          <input
            className={errors.birth ? 'input-error' : ''}
            type='date'
            placeholder='Fecha de Nacimiento...'
            {...register('birth', {
              valueAsDate: true
            })}
          />
          <small>{errors.birth?.message}</small>

          <input
            className={errors.phone ? 'input-error' : ''}
            type='number'
            placeholder='Celular...'
            {...register('phone', {
              valueAsNumber: true
            })}
          />
          <small>{errors.phone?.message}</small>

          <input
            className={errors.nit ? 'input-error' : ''}
            type='number'
            placeholder='NIT...'
            {...register('nit', {
              valueAsNumber: true
            })}
          />
          <small>{errors.nit?.message}</small>

          <input
            className={errors.socialReason ? 'input-error' : ''}
            type='text'
            placeholder='Razon Social...'
            {...register('socialReason')}
          />
          <small>{errors.socialReason?.message}</small>

          <button
            disabled={!isDirty || !isValid}
          >
            Guardar
          </button>
        </form>

        <p> ID </p>
        <p> Nro de Orden </p>
        <p> Fecha de nacimiento </p>
        <style jsx>{`
        input {
          display: block;
        }
        .input-error {
          border: 1px solid #f00;
        }
        small {
          color: #f00;
          font-size: 12px;
        }
     `}
        </style>
      </div>
    </>
  )
}
