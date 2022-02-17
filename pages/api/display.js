import { db_pdf } from '../../db/prisma/pdf'

export default async function (req, res) {
  try {
    const pdfBlob = await db_pdf.pdf.findUnique({
      where: {
        id: 'ckzmy6vkx00023oknln0n39t7'
      }
    })

    // const arraybuffer = Uint8Array.from(pdf).buffer
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename="mypdf.pdf"')
    // Buffer.from to consume in frontend

    res.status(200).json({ message: 'PDF!', data: pdfBlob, error: false, ok: true })
  } catch (error) {
    console.log('error', error)
    res.status(501).json({ ok: false, message: error.message, data: null, error: true })
  }
}
