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
import { Button } from 'components'

export default function RegisterNewCI ({ order = '' }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [verify, setVerify] = useState(false)
  const [modal, setModal] = useState(false)
  const [inputsChecked, setInputsChecked] = useState([])
  const [receipt, setReceipt] = useState(null)

  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState(false)
  const [indebt, setIndebt] = useState(total)
  const [change, setChange] = useState(0)

  let t = 0

  const session = useSession()

  const { setCheckboxes, checkboxes, filteredBox } = useInputs({ verify })

  useEffect(() => {
    const getInputs = window.localStorage.getItem('in')
    const parsedInputs = JSON.parse(getInputs)
    setInputsChecked(parsedInputs)
  }, [verify, filteredBox, checkboxes])

  useEffect(() => {
    for (const i of filteredBox) {
      t += i.price
    }
    setTotal(t)
  }, [filteredBox])

  useEffect(() => {
    modal & receipt?.id &&
      window.fetch(`/api/getUniqueId/${receipt.id}/${order.ci}`)
  }, [modal, receipt])

  const handleOrder = e => {
    e.preventDefault()
    setVerify(false)
    setLoading(true)
    saveReceipt({ filteredBox, total, indebt, change, find: order.ci })
      .then(res => res.json())
      .then(res => {
        setReceipt(res.data)
        setLoading(false)
        setModal(c => !c)
        // if (!res.ok) return new Error('No se pudo guardar el recibo')
        setInputsChecked([])
        setCheckboxes({})
      })
      .catch(err => console.log('ERR', err, err.message))
  }

  const handleContinue = e => {
    e.preventDefault()
    setVerify(true)
  }

  const handleCheckbox = useCallback(
    ({ target, ...rest }) => {
      const checked = target.checked
      const name = target.name
      const dataPrice = +target.attributes['data-price'].value
      console.log('[REST]', rest)
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

  const handleGoBack = () => {
    console.log('Back')
  }

  const handleChecked = e => {
    !checked ? setIndebt(total - change) : setIndebt(total)
    setChecked(!checked)
  }

  const handleChange = e => {
    const valueIn = +e.target.value
    setChange(valueIn)
  }

  const handleOk = () => {
    // window.localStorage.removeItem('in')
    router.replace('/registro')
  }

  if (router.isFallback) return <div>Cargando...</div>

  if (!session) return <div />

  console.log(order)

  if (loading) return <div>Revisando...</div>

  return (
    <section>
      <div id='modal'>
        <h1>Resumen</h1>
        <h2>{order.fullName}</h2>
        {receipt && (
          <div>
            <fieldset>
              <legend>Codigo de recibo</legend>
              <p id='id'>
                {receipt.id}
                {receipt.labName.replace(/ /g, '').slice(0, 4)}
                {receipt.ownerCi}
              </p>
            </fieldset>
          </div>
        )}
        <Button onChange={handleOk}>Ok</Button>
      </div>
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
          onBack={handleGoBack}
          listToVerify={filteredBox}
        />
      ) : (
        <InputProvider>
          <FormContinue onForm={handleContinue} onList={handleCheckbox} />
        </InputProvider>
      )}
      <style jsx>
        {`
          #modal {
            display: ${modal ? 'flex' : 'none'};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            flex-direction: column;
            height: 100%;
            z-index: 9999;
            background-color: #eee;
            justify-content: center;
            backdrop-filter: blur(5px);
            align-items: center;
          }
          #id {
            text-align: center;
          }
          section {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
          }
        `}
      </style>
    </section>
  )
}

export async function getStaticPaths () {
  const orders = await prisma.order.findMany({})
  const paths = orders.map(({ ci }) => {
    return {
      params: {
        ci: ci.toString()
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const ci = params.ci

  const res = await prisma.order.findUnique({
    where: {
      ci: +ci
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
    birth: getAge(res.birth)
  }

  return {
    props: { order }
  }
}

RegisterNewCI.auth = true