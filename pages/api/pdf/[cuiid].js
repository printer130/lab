import { db_pdf } from 'db/prisma/pdf'
import { getSession } from 'next-auth/react'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    }
  }
}

export default async function PDF (req, res) {
  const session = await getSession({ req })
  const { cuiid } = req.query

  if (!session?.token || req.method !== 'POST' || !cuiid) {
    res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  }

  const data = req.body

  /* if (!data) {
    res.status(405).json({
      message: 'Method not allowed',
      data: null
    })
  } */
  // data Buffer to bytes
  const dataBytes = Buffer.from(data, 'base64')

  console.log('TYPEOF', typeof data)
  console.log('length', data?.length)
  console.log('length', typeof dataBytes)
  console.log('length', dataBytes?.length)
  /* res.status(200).json({
    message: 'OK',
    ok: true,
    data: { yo: 'to' }
  }) */

  try {
    await db_pdf.pdf.create({
      data: {
        name: 'AHORA SI CTM',
        url: 'miculo.com',
        json: dataBytes
      }
    })
    res.status(200).json({ message: 'Receipt Saved!', data: true, error: false, ok: true })
  } catch (error) {
    console.log('error', error)
    res.status(501).json({ ok: false, message: 'Error saving receipt', data: null, error: true })
  }
}
