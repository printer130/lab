/* eslint-disable react/jsx-closing-tag-location */
import useSWR from 'swr'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { DEFAULT_REGISTER_VALUES, SEARCHBYNUMBER } from 'const/register_default_values'
import { registerSchema } from 'helpers/zod/RegisterSchema'
import { useRouter } from 'next/router'
import { Form } from 'components/Form'
import { useSession } from 'next-auth/react'
import { saveOrder, normalizedOrder } from 'lib/db'
import { useDebounce } from 'hooks/useDebounce'
import { toast, ToastContainer } from 'react-toastify'
import { Button, Input } from 'components'

export default function Registro () {
  const session = useSession()
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(null)
  const [filed, setFiled] = useState(null)
  const [disable, setDisable] = useState(false)

  const router = useRouter()
  const { register, handleSubmit, formState, clearErrors } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: !disable
      ? DEFAULT_REGISTER_VALUES
      : {
          phone: filed.phone
        },
    reValidateMode: 'onChange'
  })

  const debouncedSearch = useDebounce({ search, delay: 3000 })

  const { data } = useSWR(() =>
    (debouncedSearch !== null) & (search.length > SEARCHBYNUMBER)
      ? `/api/getBySearchVal/${search}`
      : null
  )
  const { errors, isValid, isDirty } = formState
  const onSubmit = data => {
    setLoading(true)
    saveOrder(normalizedOrder(data), disable)
      .then(res => {
        toast.success('Orden guardada.')

        if (!res.ok) return new Error('No se pudo guardar la orden')
        setLoading(false)
        return router.push(`/registro/${data.ci}`)
      })
      .catch(e => {
        if (e.message) {
          toast.error('No se pudo guardar la orden')
          return router.replace('/')
        }
      })
  }

  const handleFill = ({ ci, nit, sex, birth, doctor, fullName, authorEmail, phone, reason }) => {
    // setLoading(true)
    toast.info('Formulario rellenado!', { })
    setSearch('')
    clearErrors()
    setFiled({ ci, nit, sex, birth, doctor, fullName, authorEmail, phone, reason })
    setDisable(true)
  }

  const handleEdit = e => {
    setFiled({
      ...filed,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmitEdit = e => {
    setLoading(true)
    e.preventDefault()
    saveOrder(filed, disable)
      .then(res => {
        if (!res.ok) return new Error('No se pudo guardar la orden')
        setLoading(false)
        router.push(`/registro/${filed.ci}`)
      })
      .catch(e => {
        if (e.message) {
          setLoading(false)
          toast.error('No se pudo guardar la orden')
          router.replace('/')
        }
      })
  }

  const handleCloseMenu = () => {
    setSearch('')
    setDisable(false)
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
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable={false}
        progress={undefined}
      />
      {session?.data && (
        <Form
          disable={disable}
          isFetched={data?.data?.length > 0}
          onClick={handleFill}
          onLoading={setLoading}
          debouncedSearch={data ?? null}
          onFill={setSearch}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onClose={handleCloseMenu}
          loading={loading}
          errors={errors}
          isDirty={isDirty}
          isValid={isValid}
          register={register}
        />
      )}
      {
        disable && (
          <form id='filled' onSubmit={handleSubmitEdit}>
            <fieldset>
              <legend>
                <strong className='text-2xl'>Usuario seleccionado:</strong>
              </legend>
              <div>
                <Input
                  disabled
                  type='number'
                  v={filed?.ci}
                  name='ci'
                  onChange={handleEdit}
                  placeholder
                >Carnet de Identidad: </Input>
                <Input
                  type='text'
                  v={filed?.fullName}
                  disabled
                  onChange={handleEdit}
                  name='fullName'
                  placeholder
                >Nombre Completo: </Input>
                <Input
                  type='date'
                  v={filed?.birth?.split('T')[0]}
                  onChange={handleEdit}
                  name='birth'
                  disabled
                  placeholder
                >Fecha de Nacimiento: </Input>
                <Input
                  onChange={handleEdit}
                  type='number'
                  v={filed?.phone}
                  name='phone'
                  placeholder
                >Número de Celular: </Input>
                <Input
                  type='number'
                  v={filed?.nit}
                  name='nit'
                  onChange={handleEdit}
                  placeholder
                >N.I.T.: </Input>
                <Input
                  onChange={handleEdit}
                  type='text'
                  v={filed?.reason}
                  name='reason'
                  placeholder
                >Razon Social: </Input>
                <Input
                  onChange={handleEdit}
                  type='text'
                  v={filed?.doctor}
                  name='doctor'
                  placeholder
                >Médico: </Input>
                <Input
                  disabled
                  onChange={handleEdit}
                  type='text'
                  v={filed?.sex}
                  name='sex'
                >Sexo: </Input>
                <Button>Seguir</Button>
              </div>
            </fieldset>
          </form>
        )
      }
      <style jsx>{`
        #filled {
          max-width: 900px;
          margin: 0 auto;
          opacity: ${loading ? '.4' : '1'};
          pointer-events: ${loading ? 'none' : 'all'};
          user-select: ${loading ? 'none' : 'auto'};
        }
        div {
          display: ${!disable ? 'none' : 'flex'};
          min-width: 220px;
          width: 220px;
          flex-wrap: wrap;
          margin: 0 auto;
          opacity: ${loading ? '.4' : '1'};
          pointer-events: ${loading ? 'none' : 'all'};
          user-select: ${loading ? 'none' : 'auto'};
        }
      `}</style>
    </>
  )
}

Registro.auth = true
