import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  console.log('SAVE RECEIPT')
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'No session',
      data: null
    })
  }
  const session = await getSession({ req })
  console.log('session', session)
  if (!session) {
    return res.status(401).json({ message: 'No session', data: null })
  }
  const { labId } = session.token.user
  console.log('labId', labId)

  const data = JSON.parse(req.body)
  console.log('data', data)

  const { filteredBox, total, indebt, change, find } = data

  // if (!filteredBox | !total | !indebt | !change | !find | !labId) {
  //   return res.status(502).json({ message: 'Ups algo salio mal', data: null })
  // }

  const receipt = {
    json: filteredBox,
    total: +total,
    itotal: +change,
    saldo: +indebt,
    indebtList: { indebt: +change },
    labName: labId,
    owner: {
      connect: {
        ci: String(find)
      }
    }
  }
  console.log('[receipt]', receipt)

  try {
    const savedReceipt = await prisma[`receipt${labId}`].create({ data: receipt })
    return res.status(201).json({ data: savedReceipt })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ups algo salio mal', data: null, error })
  }
}
