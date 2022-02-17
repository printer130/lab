import { db_arqueo } from 'db/prisma/arqueo'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, message: 'Method not allowed', data: null, error: true })
  }

  const { e, s } = req.query

  const session = await getSession({ req })
  const { labId } = session.token.user
  try {
    const arqueoList = await db_arqueo.arqueo.findMany({
      where: {
        createdAt: {
          gte: new Date(new Date(s).toLocaleDateString()),
          lte: new Date(new Date(e).toLocaleDateString())
        },
        lab: {
          lab_name: labId
        }
      }
    })
    res.status(200).json({ ok: true, message: 'Get range of receipts', data: arqueoList, error: false })
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Please try again', data: null, error: true })
  }
}
