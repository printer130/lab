import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getAge } from 'hooks/dateTime/getAge'
import Link from 'next/link'
import { LazyBio } from 'components/LazyBio'
import { receiptBio } from 'lib/db/receiptBio'
import { useApiCallback } from 'hooks/useApiCallback'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'

export default function Bio () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { apiResponse } = useApiCallback({
    endpoint: '/api/receipt/getOne',
    cuiid: router.query.cu
  })
  const onSubmit = data => {
    setLoading(true)
    receiptBio({
      culo: {
        json: apiResponse?.data[0].json,
        data,
        cuiid: apiResponse?.data[0].cuiid
      }
    }).then(res => {
      setLoading(false)
      toast.success('Se ha guardado la información')
      return router.replace('/ordenes')
    })
    setLoading(false)
  }

  const handlePDF = () => {
    console.log('clic')
    return null
  }

  return (
    <>
      <section>
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
        <nav>
          <p>
            <span>
              Nombre: <strong>{apiResponse?.data[0]?.owner?.fullName}</strong>
            </span>
            <span>
              Edad:{' '}
              <strong>{getAge(apiResponse?.data[0]?.owner?.birth)}</strong>
            </span>
            <span>
              Sexo: <strong>{apiResponse?.data[0]?.owner?.sex}</strong>
            </span>
          </p>
          <Link href='/ordenes'>
            <a className='atras'>Ir Atras</a>
          </Link>
        </nav>
        {!apiResponse?.data[0] && <div>Cargando...</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          {apiResponse?.data[0]?.json?.length > 0 &&
            apiResponse?.data[0].json.map(({ name, values = null }) => {
              return (
                <div key={name}>
                  <LazyBio name={name} values={values} register={register} />
                </div>
              )
            })}
          <button>{loading ? 'Guardando...' : 'Guardar'}</button>
        </form>
        {/* <a onClick={handlePDF} title='Descargar en pdf'>
           Descargar PDF
         </a> */}
      </section>
      <style jsx>
        {`
          div {
            max-width: 900px;
            margin: 0 auto;
          }

          nav {
            display: flex;
            justify-content: space-between;
          }
          p {
            display: flex;
            flex-direction: column;
          }
          .atras {
            display: block;
            width: 270px;
            background-color: #1a90c0;
            height: 28.4px;
            padding: 0.25rem 0.45rem;
            color: #eee;
            text-align: center;
            font-size: 1rem;
            border-radius: 7px;
          }

          button {
            pointer-events: ${loading ? 'none' : 'auto'};
            width: 100%;
            margin-top: 2rem;
            background-color: #1a90c0;
            opacity: ${loading ? '.55' : '1'};
            padding: 0.25rem 0.45rem;
            color: #eee;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 7px;
            border: 1px solid #ddd;
          }
        `}
      </style>
    </>
  )
}
