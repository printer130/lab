/* eslint-disable react/jsx-closing-tag-location */
import { ListOfOrders } from 'components/ListOrders'
import { OnDelete } from 'components/OnDelete'
import { Search } from 'components/Search'
import { prisma } from 'db/prisma'
import { getSession, useSession } from 'next-auth/react'
import { useCallback, useMemo, useState } from 'react'
import { normalizedReceipts } from 'utils/normalize/receipts'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'

export default function Ordenes ({ result, fallback }) {
  // const { data: result } = useSWR('/api/receipt/getAll')
  // const [result, setResult] = useState({})

  // useEffect(() => {
  //   if (!result.length) {
  //     getAllReceipts().then(res => {
  //       setResult(res)
  //     })
  //   }
  // }, [])
  const [isOpen, setIsOpen] = useState(false)
  const [elDelete, setElDelete] = useState({ cuiid: '', fullname: '' })
  const [value, setValue] = useState('')
  const session = useSession()
  const token = session?.data?.token

  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
    },
    [value]
  )
  const v = String(value.toLowerCase())

  const resFiltered =
    result.length &&
    result?.filter(({ fullName, unique }) => {
      return (
        fullName.toLowerCase().includes(v) || unique.toLowerCase().includes(v)
      )
    })

  const data = useMemo(() => {
    return resFiltered
  }, [resFiltered])

  const handleDelete = ({ cuiid, fullname }) => {
    if (isOpen) {
      window
        .fetch(`/api/deleteReceipt/${elDelete.cuiid}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (res.ok) {
            setElDelete({ cuiid: '', fullname: '' })
            setIsOpen(false)
          }
          // Cant delete the last order
        })
    }
    if (!isOpen) {
      setIsOpen(true)
      setElDelete({ fullname, cuiid })
    }
  }

  function closeModal () {
    setIsOpen(false)
  }

  if (!session?.data) return <div />

  return (
    <>
      <OnDelete
        elDelete={elDelete?.fullname}
        onDelete={handleDelete}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <header>
        <strong className='block text-2xl mb-4'>Lista de Ordenes</strong>
        <Search
          value={value}
          onChange={handleChange}
          placeholder='Buscar por: nombre - número de orden'
        />
      </header>
      <section>
        <main>
          <nav>
            <strong>Creado</strong>
            <strong>Codigo</strong>
            <strong>Nombre</strong>
            <strong>Total</strong>
            <strong>Saldo</strong>
            <strong>A cuenta</strong>
          </nav>
          <ListOfOrders data={data} onDelete={handleDelete} />
        </main>
      </section>
      <style jsx>
        {`
          input {
            width: 100%;
            max-width: 500px;
            padding: 0.4rem 0.6rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 1rem;
          }

          section {
            margin: 0 auto;
            width: 100%;
            overflow-x: scroll;
            scroll-behavior: smooth;
          }

          nav {
            display: grid;
            max-width: 100%;
            width: 100%;
            align-self: center;
            grid-template-columns: 105px 145px 1fr repeat(3, 80px) ${token?.user
                ?.role === ROLE_TYPE_BIOCHEMICAL
                ? 'repeat(4, 35px)'
                : 'repeat(3, 35px)'};
          }

          main {
            display: grid;
            opacity: ${isOpen ? '.5' : 'none'};
            width: 900px;
            grid-template-rows: repeat(auto-fill, 55px);
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const session = await getSession({ req })
  const { labId } = session.token.user
  const receipts = await prisma[`receipt${labId}`].findMany({
    where: {},
    include: {
      owner: true
    }
  })
  // const receipts = await getAllReceipts()
  const result = normalizedReceipts({ receipts })

  return {
    props: { result }
  }
  // return {
  //   props: {
  //     fallback: {
  //       "/api/receipt/getALl": result
  //      }
  //   }
  // }
}
Ordenes.auth = true
