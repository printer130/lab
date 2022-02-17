import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  const session = await getSession({ req })
  const { labId } = session?.token?.user

  if (!labId) {
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }

  if (!session?.token) {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }

  try {
    const getOne = await prisma.receipts.findMany({
      where: {
        cuiid: req.query.cuiid
      },
      include: {
        owner: true
      }
    })

    return res.status(200).json({ message: 'Receipt Saved!', data: getOne })
  } catch (error) {
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }
}
