import { useState } from 'react'
import { prisma } from 'db/prisma'
import { getAge } from 'hooks/dateTime/getAge'
import { unique } from 'utils/unique'

export default function OrderToEdit ({ result }) {
  const {
    owner: { doctor, fullName, id, birth },
    saldo,
    total,
    indebtList
  } = result
  const [newIndebtList, setNewIndebtList] = useState(indebtList)
  const [sal, setSal] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    window
      .fetch(`/api/receipt/update?${id}`, {
        method: 'POST',
        body: JSON.stringify({ ...result, sal })
      })
      .then(res => res.json())
      .then(res => {
        if (!res.data) return null
        console.log(res.data, res)
        const data = res.data
        setNewIndebtList(data.indebtList)
      })
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
        {/* <h4>
          Código: <strong>{unique({

          })}</strong>
        </h4> */}
        <h4>Medico: {doctor}</h4>
        <h4>Total: {total}</h4>
        <h4>Edad: {getAge(birth)}</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>A Cuenta</th>
              <th>Saldo</th>
            </tr>
            {newIndebtList.map(({ indebt }, index) => {
              const res = total - reducir(index)
              return (
                <tr key={index}>
                  <td>{indebt}</td>
                  <td>
                    {res <= 0 ? 'Completado!' : res}
                  </td>
                </tr>
              )
            })}
            <tr>
              <td>
                <input
                  autoFocus
                  type='number'
                  value={sal}
                  max={total}
                  maxLength={total.toString().length}
                  onChange={handleChange}
                  name='indebt'
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Guardar</button>
      </form>
      <style jsx>
        {`
          table {
            display: flex;
            flex-direction: column;
            max-width: 900px;
            margin: 0 auto;
          }

          th {
            width: 185px;
          }

          tr:last-of-type {
            display: ${total};
          }

          tr {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            text-align: left;
            margin: 0.55rem 0;
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
        `}
      </style>
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const cu = params.cu
  const orderToEdit = await prisma.receipt.findUnique({
    where: {
      cuiid: cu
    },
    include: {
      owner: true
    }
  })
  if (orderToEdit) {
    await prisma.$disconnect()
  }

  const orderNormalized = {
    ...orderToEdit,
    updatedAt: +new Date(orderToEdit.updatedAt),
    createdAt: +new Date(orderToEdit.createdAt),
    owner: {
      ...orderToEdit.owner,
      createdAt: +new Date(orderToEdit.owner.createdAt),
      birth: +new Date(orderToEdit.owner.birth)
    }
  }

  return {
    props: { result: orderNormalized }
  }
}
