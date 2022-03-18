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
        {!apiResponse?.data[0] && <div>Cargando...</div>}
        <nav>
          <p>
            <span>
              Nombre: <strong>{apiResponse?.data[0]?.owner?.fullName ?? <span className='bg-gray-200 h-12 w-full' data-placeholder />}</strong>
            </span>
            <span>
              Edad:
              <strong>{getAge(apiResponse?.data[0]?.owner?.birth) ?? <span className='bg-gray-200 h-12 w-full' data-placeholder />}</strong>
            </span>
            <span>
              Sexo: <strong>{apiResponse?.data[0]?.owner?.sex ?? <span className='bg-gray-200 h-12 w-full' data-placeholder />}</strong>
            </span>
          </p>
          <Link href='/ordenes'>
            <a className='atras'>Ir Atras</a>
          </Link>
        </nav>
        <form onSubmit={handleSubmit(onSubmit)}>
          {apiResponse?.data[0]?.json?.length > 0 &&
            apiResponse?.data[0].json.map(({ name, values = null }) => {
              return (
                <div key={name}>
                  <LazyBio reagents name={name} values={values} register={register} />
                </div>
              )
            })}
          {
          !apiResponse?.data[0].json[0].values?.length &&
            <button>{loading ? 'Guardando...' : 'Guardar'}</button>
          }
        </form>
      </section>
      <style jsx>
        {`
        strong {
          padding-left: 0.5rem;
        }
          div {
            max-width: 900px;
            margin: 0 auto;
          }
          [data-placeholder]::after {
            content: ' ';
            box-shadow: 0 0 50px 9px rgba(254, 254, 254,.035);
            position: absolute;
            top: 0;
            left: -100%;
            height: 100%;
            animation: load 1s infinite;
          }

          @keyframes load {
            0% {
              left: -100%;
            }
            100% {
              left: 150%;
            }
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
