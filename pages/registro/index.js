/* eslint-disable react/jsx-closing-tag-location */
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { DEFAULT_REGISTER_VALUES } from 'const/register_default_values'
import { registerSchema } from 'helpers/zod/RegisterSchema'
import { addNewOrder } from 'db/firebase/firestore'
import { useRouter } from 'next/router'
import { Form } from 'components/Form'

export default function Registro () {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState,
    setError
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
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
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        loading={loading}
        errors={errors}
        isDirty={isDirty}
        isValid={isValid}
        register={register}
      />
      {
        isSubmitSuccessful && <div> Orden Registrada</div>
      }
      <p> ID </p>
      <p> Nro de Orden </p>
    </>
  )
}
