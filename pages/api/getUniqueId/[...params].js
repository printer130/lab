import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed', data: null })
  }

  const session = await getSession({ req })
  const { email, labName } = session.token.user
  const { params } = req.query

  const [id, ci] = params.join(',')
  if (!email) {
    return res.status(400).json({ message: 'Method not allowed', data: null })
  }

  try {
    const findedUniqueId = prisma.recipt.findUnique({
      where: {
        receipt_id: {
          id: id,
          labName: labName,
          ownerCi: ci
        }
      },
      select: {
        id: true,
        json: true,
        saldo: true,
        total: true,
        labName: true,
        indebtList: true,
        ownerCi: true,
        createdAt: false,
        cuiid: false,
        updatedAt: false
      }
    })
    return res.status(200).json({ data: findedUniqueId })
  } catch (error) {
    console.log(error)
  }
  return res.json({ data: null })
}
