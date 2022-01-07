import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed'
    })
  }

  const session = await getSession({ req })
  const { labId } = session.token.user
  if (!session) {
    return res.status(401).json({ message: 'No session', data: null })
  }
  const data = JSON.parse(req.body)

  console.log('data', data, labId, session)
  const { filteredBox, total, indebt, change, find } = data

  if (!filteredBox | !total | !indebt | !change | !find | !labId) {
    return res.status(502).json({ message: 'Ups algo salio mal', data: null })
  }
  const receipt = {
    json: filteredBox,
    total: +total,
    itotal: +indebt,
    saldo: +change,
    indebtList: { indebt: +indebt },
    owner: {
      connect: {
        ci: +find
      }
    },
    lab: {
      connect: {
        name: labId
      }
    }
  }

  try {
    const savedReceipt = await prisma.receipt.create({ data: receipt })
    return res.status(201).json({ data: savedReceipt })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ups algo salio mal', data: null, error })
  }
}
