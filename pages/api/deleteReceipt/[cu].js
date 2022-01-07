import { prisma } from 'db/prisma'

export default async function handler (req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed', data: null })
  }

  const deletedReceipt = await prisma.receipt.delete({
    where: {
      cuiid: req.query.cu
    }
  })

  if (!deletedReceipt) {
    return res.status(404).json({ message: 'Receipt not found', data: null })
  }

  res.status(200).json({ message: 'Receipt deleted', data: {} })
}
