/* eslint-disable react/jsx-closing-tag-location */
import { ListOfOrders } from 'components/ListOrders'
import { OnDelete } from 'components/OnDelete'
import { PlaceholderListOrders } from 'components/Placeholders/ListOfOrders'
import { Search } from 'components/Search'
import { useSession } from 'next-auth/react'
import { useCallback, useMemo, useState } from 'react'
import { deleteOrder } from 'lib/db'
import { toast, ToastContainer } from 'react-toastify'
import useSWR from 'swr'
import { fetcher } from 'lib/fetcher'
import { GeneratePDF } from 'utils/pdf'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'

const getOne = ({ cuiid }) => {
  return window.fetch('/api/receipt/getOne/' + cuiid).then(res => res.json())
}

export default function Ordenes () {
  const [isOpen, setIsOpen] = useState(false)
  const [elDelete, setElDelete] = useState({ cuiid: '', fullname: '' })
  const [value, setValue] = useState('')
  // const [onePDF, setOnePDF] = useState()
  const [loadingPDF, setLoadingPDF] = useState(false)
  // const [loadingOnDownload, setLoadingOnDownload] = useState(false)
  // const [isModalPDF, setIsModalPDF] = useState(false)

  const session = useSession()
  const token = session?.data?.token
  const lab = token?.user?.lab

  const { data: swrData, error, mutate } = useSWR('/api/receipt/getAll', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  })
  // const { apiResponse } = useApiCallback({ endpoint: '/api/receipt/getAll' })
  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
    },
    [value]
  )
  const v = String(value.toLowerCase())

  const resFiltered =
    swrData?.data?.length > 0 &&
    swrData.data.filter(({ fullName, unique }) => {
      return (
        fullName.toLowerCase().includes(v) || unique.toLowerCase().includes(v)
      )
    })

  const data = useMemo(() => {
    return resFiltered
  }, [resFiltered])

  const handleDelete = ({ cuiid, fullname }) => {
    setLoadingPDF(true)
    if (isOpen) {
      deleteOrder({ cuiid: elDelete.cuiid }).then(itemDeleted => {
        if (itemDeleted) {
          mutate({ ...swrData })
          setLoadingPDF(false)
          setElDelete({ cuiid: '', fullname: '' })
          setIsOpen(false)
        } else {
          setLoadingPDF(false)
          toast.error('No se pudo eliminar la orden')
        }
      })
    }

    if (!isOpen) {
      setIsOpen(true)
      setElDelete({ fullname, cuiid })
    }
    setLoadingPDF(false)
  }

  function closeModal () {
    setIsOpen(false)
  }

  function toggleModalPDF ({ cuiid }) {
    toast.info('Generando PDF...')
    setLoadingPDF(true)
    getOne({ cuiid })
      .then((oneData) => {
        if (!oneData?.data[0]) {
          setLoadingPDF(false)
          return toast.error('Vuelve a intentarlo.')
        }
        GeneratePDF({
          id: 'pdf',
          data: oneData?.data[0],
          lab,
          onPDFGenerated: toggleModalPDF
        })
        setLoadingPDF(false)
      })
  }

  if (!session?.data) return <div />
  if (error) return <div>Ups algo salío mal, refresque la página.</div>
  return (
    <>
      <section className='container'>
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
            placeholder='Buscar... (Nombre - Número de Orden)'
          />
        </header>
        <section className='w-full my-0 mx-[auto] overflow-x-scroll md:overflow-x-visible'>
          <main>
            <nav>
              <strong>Creado</strong>
              <strong>Codigo</strong>
              <strong>Nombre</strong>
              <strong>Total</strong>
              <strong>A cuenta</strong>
              <strong>Saldo</strong>
            </nav>
            {data.length === 0 && <div>No pudimos encontrar esa busqueda.</div>}
            {data
              ? <ListOfOrders
                  onPDF={toggleModalPDF}
                  data={data}
                  onDelete={handleDelete}
                />
              : <>
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
                <PlaceholderListOrders />
              </>}
          </main>
        </section>
      </section>

      <style jsx>
        {`
          .container {
            pointer-events: ${loadingPDF ? 'none' : 'auto'};
            opacity: ${loadingPDF ? '0.5' : '1'};
          }

          section {
            scroll-behavior: smooth;
            pointer-events: ${loadingPDF ? 'none' : 'auto'};
            opacity: ${loadingPDF ? '0.5' : '1'};
          }

          nav {
            display: grid;
            max-width: 100%;
            width: 100%;
            align-self: center;
            grid-template-columns: 105px 145px 1fr repeat(3, 80px) ${
              token?.user?.role === ROLE_TYPE_BIOCHEMICAL
                ? 'repeat(4, 35px)'
                : 'repeat(3, 35px)'
            };
          }

          main {
            display: grid;
            opacity: ${isOpen ? '.5' : 'none'};
            width: 900px;
            grid-template-rows: repeat(auto-fill, 55px);
          }
        }
        `}
      </style>
    </>
  )
}

Ordenes.auth = true
