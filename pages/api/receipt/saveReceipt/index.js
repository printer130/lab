import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'No session',
      data: null
    })
  }
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: 'No session', data: null })
  }
  const { labId } = session?.token?.user

  const data = JSON.parse(req.body)
  const { filteredBox, total, indebt, change, find, discount } = data

  const receipt = {
    json: filteredBox,
    total: +total,
    itotal: +change,
    saldo: +indebt.toFixed(2),
    indebtList: { indebt: +change },
    labName: labId,
    discount: +discount,
    owner: {
      connect: {
        ci: String(find)
      }
    }
  }
  if (!labId) {
    return res
      .status(500)
      .json({ message: 'Ups algo salio mal la', data: null, error: false })
  }
  console.log('trey', receipt)
  try {
    const savedReceipt = await prisma.receipts.create({ data: receipt })

    return res.status(201).json({ data: savedReceipt, error: false, ok: true })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ups algo salio mal 5', data: null, error: true, ok: false })
  }
}
