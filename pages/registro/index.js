/* eslint-disable react/jsx-closing-tag-location */
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { DEFAULT_REGISTER_VALUES } from 'const/register_default_values'
import { registerSchema } from 'helpers/zod/RegisterSchema'
import { useRouter } from 'next/router'
import { Form } from 'components/Form'
import { useSession } from 'next-auth/react'
import { saveOrder, normalizedOrder } from 'lib/db'

export default function Registro ({ fallback }) {
  const session = useSession()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState, setError } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: DEFAULT_REGISTER_VALUES,
    reValidateMode: 'onChange'
  })

  const { errors, isValid, isDirty } = formState
  const onSubmit = data => {
    setLoading(true)
    saveOrder(normalizedOrder(data))
      .then(res => {
        if (!res.ok) return new Error('No se pudo guardar la orden')
        setLoading(false)
        router.push(`/registro/${data.ci}`)
      })
      .catch(e => {
        setError(e)
        router.push('/')
      })
  }

  return (
    <>
      <Head>
        <title>U Lab | Registro</title>
        <meta
          name='description'
          content='Para laboratorios y pacientes con recetas|orden'
        />
      </Head>
      {!session?.data ? (
        <div>Nada que ver aki</div>
      ) : (
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          errors={errors}
          isDirty={isDirty}
          isValid={isValid}
          register={register}
        />
      )}
    </>
  )
}

Registro.auth = true
