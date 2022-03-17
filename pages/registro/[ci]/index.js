/* eslint-disable react/jsx-indent */
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import { OrderProfile } from 'components/OrderProfile'
import { useInputs } from 'hooks/useInputs'
import { FormContinue } from 'components/FormContinue'
import { FormVerify } from 'components/FormVerify'
import { InputProvider } from 'hooks/ctx/Inputs'
import { useSession } from 'next-auth/react'
import { prisma } from 'db/prisma'
import { getAge } from 'hooks/dateTime/getAge'
import { saveReceipt } from 'lib/db'
import Link from 'next/link'
import { MyModal } from 'components/Dialog'
import { unique } from 'utils/unique'
import { toast, ToastContainer } from 'react-toastify'

export default function RegisterNewCI ({ order = '' }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [verify, setVerify] = useState(false)
  const [modal, setModal] = useState(false)
  const [receipt, setReceipt] = useState(null)

  const [total, setTotal] = useState(0)
  const [indebt, setIndebt] = useState(total)
  const [change, setChange] = useState(0)
  const [percentage, setPercentage] = useState(0)

  let t = 0

  const session = useSession()

  const { setCheckboxes, checkboxes, filteredBox } = useInputs({ verify })

  useEffect(() => {
    calculateTotal()
  }, [filteredBox])

  function calculateTotal () {
    for (const i of filteredBox) {
      t += i.price
    }
    setTotal(t)
  }

  const handleOrder = e => {
    toast.info('Verificando...')
    e.preventDefault()
    setVerify(false)
    setLoading(true)
    saveReceipt({ filteredBox, total, indebt, change, find: order.ci, discount: percentage })
      .then(res => {
        if (!res.ok) {
          toast.error('Ups algo salió mal')
        }
        toast.success('Analisis guardado con éxito')
        setReceipt(res.data)
        setLoading(false)
        setModal(c => !c)
        // if (!res.ok) return new Error('No se pudo guardar el recibo')
        setCheckboxes({})
      })
      .catch(err => err?.message && toast.error('Ups algo salió mal'))
  }

  const handleContinue = e => {
    e.preventDefault()
    toast.info('Continuar!')
    setVerify(true)
  }

  const handleCheckbox = useCallback(
    ({ target }) => {
      const checked = target.checked
      const name = target.name
      const dataPrice = +target.attributes['data-price'].value

      setCheckboxes({
        ...checkboxes,
        [name]: {
          name: name,
          isChecked: checked,
          price: dataPrice
        }
      })
      setTotal(total + dataPrice)
    },
    [checkboxes, total]
  )

  const handleChange = e => {
    const valueIn = +e.target.value
    setChange(valueIn)
  }

  useEffect(() => {
    if (change >= 0 && change <= total) {
      setIndebt(total - change)
      if (percentage > 0) {
        setIndebt(total - (total * (percentage / 100)) - change)
      }
    } else {
      setIndebt(total)
    }
  }, [change, percentage])

  function handlePercentage (e) {
    const value = +e.target.value
    setPercentage(value)
  }

  if (router?.isFallback) return <div>Cargando...</div>

  if (!session) return <div />

  if (loading) return <div>Revisando...</div>

  return (
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
      {receipt && (
        <div className='w-full bg-slate-50 h-screen'>
          <MyModal
            fullName={order?.fullName}
            unique={unique({
              id: receipt.id,
              ownerCi: receipt.ownerCi,
              labName: order.labName,
              cuiid: receipt.cuiid
            })}
          />
        </div>
      )}
      {!receipt && (
        <Link href='/registro'>
          <a>Regresar</a>
        </Link>
      )}
      {order?.fullName
        ? (
        <OrderProfile
          {...order}
          onIndebtChange={handleChange}
          indebt={indebt}
          total={total}
          discount={percentage}
          ci={order.ci}
          onPercentage={handlePercentage}
        />
          )
        : (
        <h1>Cargando... </h1>
          )}
      {verify
        ? (
        <FormVerify
          onCheckbox={handleCheckbox}
          onSave={handleOrder}
          onVerify={setVerify}
          listToVerify={filteredBox}
        />
          )
        : (
        <InputProvider>
          <FormContinue receipt={receipt?.cuiid} onForm={handleContinue} onList={handleCheckbox} />
        </InputProvider>
          )}
      <style jsx>
        {`
          section {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
            backdrop-filter: blur(10px);
          }
          h3 {
            text-align: center;
          }
          a {
            background-color: #1a90c0;
            padding: 0.4rem 0.8rem;
            width: 100%;
            display: block;
            text-align: center;
            margin: 0 auto;
            color: #eee;
            border-radius: 5px;
          }
        `}
      </style>
    </section>
  )
}

export async function getServerSideProps ({ params }) {
  const ci = params.ci
  const res = await prisma.order.findUnique({
    where: {
      ci: ci
    },
    include: {
      author: {
        select: {
          id: false,
          createdAt: false,
          role: false,
          name: false,
          password: false,
          email: false,
          labId: true
        }
      }
    }
  })
  const order = {
    id: res.id,
    fullName: res.fullName,
    ci: res.ci,
    nit: res.nit,
    phone: res.phone,
    reason: res.reason,
    sex: res.sex,
    doctor: res.doctor,
    authorId: res.authorEmail,
    birth: getAge(res.birth),
    labName: res.author.labId
  }

  return {
    props: { order }
  }
}

RegisterNewCI.auth = true
