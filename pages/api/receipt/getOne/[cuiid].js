import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  const session = await getSession()
  const { labId } = session.token.user
  if (!session?.token) {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }

  try {
    const receiptUpdated = await prisma[`receipt${labId}`].findMany({
      where: {
        cuiid: req.query.cuiid
      },
      include: {
        owner: true
      }
    })

    return res.status(200).json({ message: 'Receipt Saved!', data: receiptUpdated })
  } catch (error) {
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }
}
