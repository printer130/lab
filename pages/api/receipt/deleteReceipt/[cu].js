import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function handler (req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed', data: null })
  }
  const session = await getSession({ req })
  const { labId } = session.token.user

  if (!labId) {
    return res.status(404).json({ message: 'Receipt not found', data: null })
  }

  const deletedReceipt = await prisma.receipts.delete({
    where: {
      cuiid: req.query.cu
    }
  })

  if (!deletedReceipt) {
    return res.status(404).json({ message: 'Receipt not found', data: null })
  }

  return res.status(200).json({ message: 'Receipt deleted', data: deletedReceipt })
}
