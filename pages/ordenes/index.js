/* eslint-disable react/jsx-closing-tag-location */
import { ListOfOrders } from 'components/ListOrders'
import { Search } from 'components/Search'
import { prisma } from 'db/prisma'
import { useSession, getSession } from 'next-auth/react'
import { useCallback, useMemo, useState } from 'react'
import { unique } from 'utils/unique'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'
export default function Ordenes ({ orders = {}, result = {} }) {
  const [value, setValue] = useState('')
  // const session = useUser()
  const session = useSession()
  const token = session?.data?.token
  // const { role } = session.data.user.token

  // const role = 'BIOCHEMICAL'
  // const { user: { role } } = session?.data?.token
  // const role = session.data ? session.data.user.token.role : 'RECEPTIONIST'

  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
    },
    [value]
  )

  const resFiltered = result.filter(({ fullName, unique }) => {
    return (
      fullName.toLowerCase().includes(value.toLowerCase()) ||
      unique.toLowerCase().includes(value.toLowerCase())
    )
  })

  const data = useMemo(() => {
    return resFiltered
  }, [resFiltered])

  return (
    <>
      {!session.data ? (
        <div />
      ) : (
        <section>
          <header>
            <h1>Lista de Ordenes</h1>
            <Search
              value={value}
              onChange={handleChange}
              placeholder='Buscar por: nombre - número de orden'
            />
          </header>
          <main>
            <nav>
              <strong>Creado</strong>
              <strong>Codigo</strong>
              <strong>Nombre</strong>
              <strong>Total</strong>
              <strong>Saldo</strong>
              <strong>A cuenta</strong>
            </nav>
            <ListOfOrders data={data} />
          </main>
        </section>
      )}
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
            max-width: 100%;
            min-width: 520px;
            width: 100%;
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
            grid-template-rows: repeat(auto-fit, 55px);
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const session = await getSession({ req })
  // if (!session) return { props: { orders: {}, result: [] } }
  // console.log('SESSIOn', session)
  const { labId } = session.token.user
  const receipts = await prisma[`receipt${labId}`].findMany({
    where: {},
    include: {
      owner: true
    }
  })
  console.log('receipts', receipts)

  const result = receipts.map(item => {
    return {
      id: item.id,
      createdAt: +new Date(item.createdAt),

      itotal: item.itotal,
      total: item.total,
      indebt: item.indebtList,
      saldo: item.saldo,
      unique: unique({
        labName: item.labName,
        ownerCi: item.ownerCi,
        id: item.id
      }),

      labName: item.labName,
      ownerCi: item.owner.ci,

      cu: item.cuiid,
      fullName: item.owner.fullName,
      birth: +new Date(item.owner.birth),
      nit: item.owner.nit,
      phone: item.owner.phone,
      sex: item.owner.sex,
      doctor: item.owner.doctor
    }
  })

  return {
    props: { result }
  }
}
Ordenes.auth = true
