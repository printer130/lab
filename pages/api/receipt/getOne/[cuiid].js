import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  const session = await getSession({ req })
  console.log('session', session)
  const { labId } = session?.token?.user
  console.log('labId', labId)
  if (!session?.token) {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }
  console.log('ENTRAMOS AL PRISMA')
  try {
    const receiptUpdated = await prisma[`receipt${labId}`].findMany({
      where: {
        cuiid: req.query.cuiid
      },
      include: {
        owner: true
      }
    })
    console.log('receiptUpdated',receiptUpdated)

    return res.status(200).json({ message: 'Receipt Saved!', data: receiptUpdated })
  } catch (error) {
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }
}
