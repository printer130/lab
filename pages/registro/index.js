/* eslint-disable react/jsx-closing-tag-location */
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { DEFAULT_REGISTER_VALUES } from 'const/register_default_values'
import { registerSchema } from 'helpers/zod/RegisterSchema'
import { Button, ErrorMessage, Input } from 'components'
import { addNewOrder } from 'db/firebase/firestore'
import { useRouter } from 'next/router'

export default function Registro () {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState,
    setError
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
    defaultValues: DEFAULT_REGISTER_VALUES,
    reValidateMode: 'onChange'
  })

  const { errors, isValid, isDirty, isSubmitSuccessful } = formState

  const onSubmit = data => {
    setLoading(true)
    addNewOrder(data)
      .then(() => {
        setLoading(false)
        router.push(`/registro/${data?.ci}`)
      })
      .catch(setError)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset disabled={!!loading}>
          <legend>Ordenes: </legend>
          <Input
            type='number'
            errors={errors.ci}
            placeholder='C.I.'
            {...register('ci', {
              valueAsNumber: true
            })}
          />
          <ErrorMessage>{errors.ci?.message}</ErrorMessage>

          <Input
            type='text'
            errors={errors.fullName}
            placeholder='Nombre Completo...'
            {...register('fullName')}
          />
          <ErrorMessage>{errors.fullName?.message}</ErrorMessage>

          <Input
            type='date'
            placeholder='Fecha de Nacimiento...'
            {...register('birth', {
              valueAsDate: true
            })}
          />
          <ErrorMessage>{errors.birth?.message}</ErrorMessage>

          <Input
            type='number'
            placeholder='Celular...'
            {...register('phone', {
              valueAsNumber: true
            })}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>

          <Input
            type='number'
            placeholder='NIT...'
            {...register('nit', {
              valueAsNumber: true
            })}
          />
          <ErrorMessage>{errors.nit?.message}</ErrorMessage>

          <Input
            type='text'
            placeholder='Razon Social...'
            {...register('socialReason')}
          />
          <ErrorMessage>{errors.socialReason?.message}</ErrorMessage>

          <Button
            isDirty={isDirty}
            isValid={isValid}
          >
            Guardar
          </Button>
        </fieldset>

      </form>
      {
        isSubmitSuccessful && <div> Orden Registrada</div>
      }

      <p> ID </p>
      <p> Nro de Orden </p>

      <style jsx>{`
        .input-error {
          border: 1px solid #f00;
        }
        fieldset {
          opacity: ${loading ? '.4' : '1'};
        }
        small {
          color: #f00;
          font-size: 12px;
        }
     `}
      </style>
    </>
  )
}
