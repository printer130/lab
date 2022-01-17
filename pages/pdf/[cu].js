import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default function CU ({ data }) {
  return (
    <>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
      <h1>pdf</h1>
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const cu = req.query.cu
  const session = await getSession({ req })
  const { labId } = session.token.user
  const data = await prisma[`${'receipt' + labId}`].findUnique({
    where: {
      cuiid: cu
    }
  })
  console.log('PDF', data)
  return {
    props: { data: {} }
  }
}
