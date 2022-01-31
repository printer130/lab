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

export default function RegisterNewCI ({ order = '' }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [verify, setVerify] = useState(false)
  const [modal, setModal] = useState(false)
  const [receipt, setReceipt] = useState(null)

  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState(false)
  const [indebt, setIndebt] = useState(total)
  const [change, setChange] = useState(0)

  let t = 0

  const session = useSession()

  const { setCheckboxes, checkboxes, filteredBox } = useInputs({ verify })

  useEffect(() => {
    for (const i of filteredBox) {
      t += i.price
    }
    setTotal(t)
  }, [filteredBox])

  const handleOrder = e => {
    e.preventDefault()
    setVerify(false)
    setLoading(true)
    saveReceipt({ filteredBox, total, indebt, change, find: order.ci })
      .then(res => {
        setReceipt(res.data)
        setLoading(false)
        setModal(c => !c)
        // if (!res.ok) return new Error('No se pudo guardar el recibo')
        setCheckboxes({})
      })
      .catch(err => console.log('ERR', err, err.message))
  }

  const handleContinue = e => {
    e.preventDefault()
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

  const handleChecked = e => {
    !checked ? setIndebt(total - change) : setIndebt(total)
    setChecked(!checked)
  }

  const handleChange = e => {
    const valueIn = +e.target.value
    setChange(valueIn)
  }

  if (router.isFallback) return <div>Cargando...</div>

  if (!session) return <div />

  if (loading) return <div>Revisando...</div>

  return (
    <section>
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
      {order?.fullName ? (
        <OrderProfile
          {...order}
          onIndebtChecked={handleChecked}
          onIndebtChange={handleChange}
          indebt={indebt}
          checked={checked}
          total={total}
          ci={order.ci}
        />
      ) : (
        <h1>Cargando... </h1>
      )}
      {verify ? (
        <FormVerify
          onCheckbox={handleCheckbox}
          onSave={handleOrder}
          onVerify={setVerify}
          listToVerify={filteredBox}
        />
      ) : (
        <InputProvider>
          <FormContinue onForm={handleContinue} onList={handleCheckbox} />
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
