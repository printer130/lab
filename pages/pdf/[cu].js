import { prisma } from 'db/prisma'

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

export async function getServerSideProps (req, res) {
  const cu = req.query.cu
  const data = await prisma.receipt.findUnique({
    where: {
      cuiid: cu
    }
  })
  console.log('PDF', data)
  return {
    props: { data: {} }
  }
}
