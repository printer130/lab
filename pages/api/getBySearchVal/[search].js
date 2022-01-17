import { prisma } from 'db/prisma'

export default async function handler (req, res) {
  // if (req.method !== 'GET') {
  //   return res.status(405).json({ message: 'Method not allowed', data: null })
  // }
  const searchVal = req.query.search
  // console.log('PARAMS', req.query.search)
  const getAllOrders = await prisma.order.findMany({
    where: {
      ci: {
        contains: searchVal
      }
    }
  })

  if (!getAllOrders) {
    return res.status(404).json({ message: 'Receipt not found', data: null })
  }

  res.status(200).json({ message: 'Receipts!', data: getAllOrders })
}
