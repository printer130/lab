import { prisma } from 'db/prisma'
function normalizeBio ({ json, data }) {
  for (let i = 0; i < json.length; i++) {
    const toCheck = json[i].name
    for (let j = 0; j < json.length; j++) {
      if (toCheck === json[j].name) {
        json[i] = {
          ...json[i],
          name: json[i].name,
          values: data[json[j].name]
        }
      }
    }
  }
}
export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ data: null })
  }

  const receiptData = JSON.parse(req.body)
  console.log('receiptData', receiptData)

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
  console.log('[JSON]', receiptData.json)
  const receiptBioUpdated = await prisma.receipt.update({
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
