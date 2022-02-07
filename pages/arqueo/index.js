import { Button, Input } from 'components'
import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'
import { useState } from 'react'

function mappedPrice ({ getReceipts }) {
  let TotalDay = 0

  getReceipts.forEach(p => { TotalDay = TotalDay + p })

  return { TotalDay }
}

export default function Arqueo ({ getReceipts }) {
  const [pay, setPay] = useState(0)
  const [error, setError] = useState(false)
  const { TotalDay } = mappedPrice({ getReceipts })

  const handleChange = e => {
    const v = Math.abs(e.target.value)
    if (v > TotalDay) {
      setError(true)
      setPay(0)
    } else {
      setError(false)
      setPay(v)
    }
  }

  const handleClick = () => {
    console.log('first', getReceipts)
  }

  return (
    <>
      <section className='w-72 mx-auto my-0 sm:text-center'>
        <div className='mb-5 flex items-start flex-col justify-center'>
          <Input
            name='caja'
            onChange={handleChange}
            placeholder='e.g. 550 Bs.'
            type='number'
          >
            <h1 className='text-2xl py-5'>Total de Caja</h1>
          </Input>
          <p className='flex justify-between flex-row items-center'>
            Pagos Realizados:
            <strong className='text-bold p-2 text-lg'> {TotalDay - pay}</strong>
            Bs.
          </p>
          <p className='flex justify-between flex-row items-center'>
            Total del Dia:
            <strong className='text-bold p-2 text-lg'> {TotalDay}</strong>
            Bs.
          </p>
        </div>
        {/* <Button onChange={handleClick}>No hace nada este boton</Button> */}
        {error && <span className='text-red-600'>Caja incorrecta.</span>}
      </section>
    </>
  )
}

export async function getServerSideProps ({ req, res }) {
  const session = await getSession({ req })
  const { labId } = session.token.user
  // gte: new Date(new Date().toLocaleDateString())
  const receipts = await prisma[`receipt${labId}`].findMany({
    where: {
      createdAt: {
        gte: new Date(new Date().toLocaleDateString())
      }
    },
    include: {
      owner: true
    }
  })

  const getReceipts = receipts.map(r => {
    return r.itotal
  })

  return {
    props: { getReceipts }
  }
}

Arqueo.auth = true
