import { db_arqueo } from 'db/prisma/arqueo'
import { Button, Input } from 'components'
import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { getRangeDate, createArqueo } from 'lib/db'
import { toast } from 'react-toastify'

import 'react-date-range/dist/theme/default.css'
import 'react-date-range/dist/styles.css'

export const ADMIN = 'admin'

function mappedPrice ({ getReceipts }) {
  let TotalDay = 0

  getReceipts.forEach(p => { TotalDay = TotalDay + p })

  return { TotalDay }
}

export default function Arqueo ({ getReceipts, session }) {
  const [pay, setPay] = useState(0)
  const [error, setError] = useState(false)
  const [listOfDates, setListOfDates] = useState([])
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  if (getReceipts === null) {
    return <div>Nada que ver aquí.</div>
  }

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
    //  window.print()
    createArqueo({ total: TotalDay, caja: pay })
      .then(res => {
        if (res?.ok) return toast.success('Arqueo finalizado con éxito')
      })
  }

  const handleRangeDate = () => {
    toast.info('Buscando en Rango de Fechas...')
    const { startDate, endDate } = dateRange[0]
    getRangeDate({ startDate, endDate })
      .then(res => {
        toast.success('Rando de fecha encontrado.')
        setListOfDates(res?.data)
      })
      .catch(e => toast.error('Intente nuevamente'))
  }

  return (
    <>
      {
      session?.user?.role === 'ADMIN'
        ? null
        : <section className='w-72 mx-auto my-0 pb-10 sm:text-center'>
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
              Total del Día:
              <strong className='text-bold p-2 text-lg'> {TotalDay}</strong>
              Bs.
            </p>
          </div>
          <Button onChange={handleClick}>Finalizar</Button>
          {error && <span className='text-red-600'>Caja incorrecta.</span>}
        </section>
    }

      {
        session?.user?.role === 'ADMIN' &&
          <>
            <h2>Buscar por fechas.</h2>
            <DateRangePicker
              onChange={item => setDateRange([item.selection])}
              showSelectionPreview
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={dateRange}
              direction='horizontal'
              preventSnapRefocus
              calendarFocus='backwards'
            />
            <Button onChange={handleRangeDate}>Buscar</Button>
          </>
    }
      <section className='w-[890px] overflow-x-scroll md:overflow-x-hidden flex flex-1 flex-col mt-4'>
        <p className='flex w-full justify-between text-base font-bold'>
          <span className='w-40'>Fecha de creacion</span>
          <span className='w-24'>Caja</span>
          <span className='w-40'>Gasto</span>
          <span className='w-24'>Total</span>
        </p>
        {
          listOfDates.map(({ caja, createdAt, total, cuiid }) => {
            return (
              <article className='flex w-full py-1 justify-between' key={cuiid}>
                <p className='w-40'>{createdAt.split('T')[0]}</p>
                <p className='w-24'>{caja}</p>
                <p className='w-40'>{caja + 'diff'}</p>
                <p className='w-24'>{total}</p>
              </article>
            )
          })
        }
      </section>
      <style jsx>{`
        .rdrCalendarWrapper {
          display: none;
        }
        @page {
          size: A4 portrait;
          background-color: #101010;
          page-break-before: always;
        }
        @media print {
          .noPrint {
            display: none;
          }
        }
      `}
      </style>
    </>
  )
}

export async function getServerSideProps ({ req, res }) {
  const session = await getSession({ req })
  const { labId, role } = session?.token?.user

  if (role === 'BIOCHEMICAL') {
    return { props: { getReceipts: null } }
  }

  // gte: new Date(new Date().toLocaleDateString())

  const response = await db_arqueo.arqueo.findMany({
    where: {
      lab_id: labId
    },
    orderBy: [
      {
        // asc | desc
        createdAt: 'desc'
      }
    ]
  })

  const finishDate = response[0]?.createdAt

  const receipts = await prisma.receipts.findMany({
    where: {
      labName: labId,
      createdAt: {
        gte: new Date(new Date(finishDate || null).toLocaleDateString())
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
    props: { getReceipts, session: session.token }
  }
}

Arqueo.auth = true
