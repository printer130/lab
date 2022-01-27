import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'
import { normalizedReceipts } from 'utils/normalize/receipts'

export default async function GetAll (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }

  const session = await getSession({ req })

  const { labId } = session.token.user

  try {
    const receipts = await prisma[`receipt${labId}`].findMany({
      where: {},
      include: {
        owner: true
      }
    })

    const result = normalizedReceipts({ receipts })
    return res.status(201).json({ ok: true, data: result })
  } catch (error) {
    return res.status(400).json({
      ok: false,
      data: null,
      message: 'Algo salio mal, refresque la página'
    })
  }
}
