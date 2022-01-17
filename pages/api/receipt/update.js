import { getSession } from 'next-auth/react'
import { prisma } from 'db/prisma'

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }

  const session = await getSession({ req })

  const { labId } = session.token.user

  if (!session?.token) {
    return res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }
  // const { email, labName } = session.token.user
  const receiptData = JSON.parse(req.body)

  console.log('receiptData', receiptData)
  const { cuiid, saldo, indebtList, sal } = receiptData

  indebtList.push({ indebt: +sal })
  // return res.status(200).json({})

  try {
    const receiptUpdated = await prisma[`receipt${labId}`].update({
      where: {
        cuiid: cuiid
      },
      data: {
        indebtList: indebtList,
        saldo: saldo,
        itotal: indebtList.reduce((acc, cur) => acc + cur.indebt, 0)
      }
    })

    res.status(200).json({ message: 'Receipt Saved!', data: receiptUpdated })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }
}
