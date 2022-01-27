import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ data: null })
  }
  const session = await getSession({ req })
  const { labId } = session.token.user

  const receiptData = JSON.parse(req.body)

  if (!receiptData) return res.status(405).json({ data: null })

  for (let i = 0; i < receiptData.json.length; i++) {
    const toCheck = receiptData.json[i].name
    for (let j = 0; j < receiptData.json.length; j++) {
      if (toCheck === receiptData.json[j].name) {
        receiptData.json[i] = {
          ...receiptData.json[i],
          name: receiptData.json[i].name,
          values: receiptData.data[receiptData.json[j].name] ?? receiptData.data
        }
      }
    }
  }

  const receiptBioUpdated = await prisma[`receipt${labId}`].update({
    where: {
      cuiid: receiptData.cuiid
    },
    data: {
      json: receiptData.json
    }
  })
  if (!receiptBioUpdated) return res.status(405).json({ data: null })

  res.status(200).json({ data: receiptBioUpdated })
}
