/* eslint-disable react/jsx-closing-tag-location */
import { ListOfOrders } from 'components/ListOrders'
import { OnDelete } from 'components/OnDelete'
import { PlaceholderListOrders } from 'components/Placeholders/ListOfOrders'
import { Search } from 'components/Search'
import { useSession } from 'next-auth/react'
import { useApiCallback } from 'hooks/useApiCallback'
import { useCallback, useMemo, useState } from 'react'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'

export default function Ordenes () {
  const [isOpen, setIsOpen] = useState(false)
  const [elDelete, setElDelete] = useState({ cuiid: '', fullname: '' })
  const [value, setValue] = useState('')
  const session = useSession()
  const token = session?.data?.token

  const { apiResponse } = useApiCallback({ endpoint: '/api/receipt/getAll' })

  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
    },
    [value]
  )
  const v = String(value.toLowerCase())

  const resFiltered =
    apiResponse?.data?.length > 0 &&
    apiResponse.data.filter(({ fullName, unique }) => {
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
          {data
            ? (
              <ListOfOrders
                data={data}
                onDelete={handleDelete}
              />
              )
            : (
              <div className='w-screen flex items-center flex-col'>
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
              </div>
              )}
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
          [data-placeholder]::after {
            content: " ";
            box-shadow: 0 0 50px 9px rgba(254,254,254);
            position: absolute;
            top: 0;
            left: -100%;
            height: 100%; 
            animation: load 1s infinite;
          }
          @keyframes load {
            0%{ left: -100%}
            100%{ left: 150%}
          }
        `}
      </style>
    </>
  )
}

Ordenes.auth = true
