import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { getAge } from 'hooks/dateTime/getAge'
import { unique } from 'utils/unique'
import Link from 'next/link'

export default function OrderToEdit ({ result }) {
  const {
    owner: { doctor, fullName, birth },
    saldo,
    labName,
    ownerCi,
    cuiid,
    id,
    total,
    indebtList
  } = result
  const [newIndebtList, setNewIndebtList] = useState(indebtList)
  const [sal, setSal] = useState('')
  const [loading, setLoading] = useState(false)
  // const [isCompleted, setIsCompleted] = useState(false)
  let isCompleted = false

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    window
      .fetch(`/api/receipt/update?${cuiid}`, {
        method: 'POST',
        body: JSON.stringify({ ...result, sal })
      })
      .then(res => res.json())
      .then(res => {
        if (!res.data) return null
        const data = res.data
        setNewIndebtList(data.indebtList)
      })
      .catch(e => e)
  }

  const handleChange = e => {
    setSal(e.target.value)
  }

  function reducir (indece) {
    return newIndebtList
      .slice(0, indece + 1)
      .reduce((acc, cur) => acc + +cur.indebt, 0)
  }
  return (
    <>
      <header>
        <h1>Nombre: {fullName}</h1>
        <h4>
          Código: <strong>{unique({ id, cuiid, labName, ownerCi })}</strong>
        </h4>
        <h4>Medico: {doctor}</h4>
        <h4>Edad: {getAge(birth)} años</h4>
        <h4>Total: {total} Bs.</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>A Cuenta</th>
              <th>Debe</th>
            </tr>
            {newIndebtList.map(({ indebt }, index) => {
              console.log({ newIndebtList, indebt })
              const res = total - reducir(index)
              if (res <= 0) {
                isCompleted = true
              }
              return (
                <tr key={index}>
                  <td>{indebt} Bs.</td>
                  <td>
                    {res <= 0 ? <span>¡Saldo completado!</span> : res + ' Bs.'}
                  </td>
                </tr>
              )
            })}
            <tr className='pagar'>
              <td>
                <input
                  autoFocus
                  type='number'
                  value={sal}
                  disabled={loading || isCompleted}
                  max={total}
                  maxLength={total.toString().length}
                  onChange={handleChange}
                  name='indebt'
                />
              </td>
            </tr>
          </tbody>
        </table>
        {!isCompleted ? <button>{loading ? 'Guardando...' : 'Guardar'}</button> : <Link href='/ordenes'><a>Regresar</a></Link>}
      </form>
      <style jsx>
        {`
          table {
            display: flex;
            flex-direction: column;
            max-width: 900px;
            margin: 0 auto;
            min-width: 220px;
          }

          th {
            width: 185px;
            text-align: start;
          }

          tr:last-of-type {
            display: ${total};
          }

          .pagar {
            grid-area: 2;
            display: ${isCompleted ? 'none' : 'block'};
          }

          tr {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            text-align: left;
            margin: 0 0 0.55rem 0;
          }

          td {
            width: 185px;
          }

          input {
            border-radius: 5px;
            padding: 0.3rem 0 0.3rem 0.15rem;
            border: 1px solid #202020;
            font-weight: bold;
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
          span {
            font-size: 1.2rem;
          }
          a {
            background-color: #1a8cbb;
            padding: 0.4rem 0.8rem;
            width: 100%;
            display: block;
            text-align: center;
            margin: 0 auto;
            color: #eee;
            border-radius: 5px;
          }
          a:hover {
            background-color: #167ca6;
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps ({ params, req }) {
  const cuiid = params.cuiid
  const session = await getSession({ req })
  const { labId } = session.token.user

  const orderToEdit = await prisma[`${'receipt' + labId}`].findUnique({
    where: {
      cuiid
    },
    include: {
      owner: true
    }
  })

  console.log('date', orderToEdit)

  const orderNormalized = {
    ...orderToEdit,
    createdAt: +new Date(orderToEdit.createdAt),
    updatedAt: +new Date(orderToEdit.updatedAt),
    owner: {
      ...orderToEdit.owner,
      createdAt: +new Date(orderToEdit.owner.createdAt),
      birth: +new Date(orderToEdit.owner.birth)
    }
  }

  console.log('orderNormalized', orderNormalized)

  return {
    props: { result: orderNormalized }
  }
}