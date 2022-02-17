import { getSession } from 'next-auth/react'
import { prisma } from 'db/prisma'

export default async function (req, res) {
  // if (req.method !== 'PUT') {
  //  return res.status(405).json({ message: 'Method not allowed' })
  // }

  const session = await getSession({ req })
  const { ci, phone, nit, reason, doctor } = JSON.parse(req.body)
  const { email } = session.token.user
  if (!ci || !phone || !nit || !reason || !doctor) {
    return res.status(400).json({
      ok: false,
      data: null,
      message: 'Faltan datos'
    })
  }
  try {
    const orderUpdated = await prisma.order.update({
      where: {
        ci: String(ci)
      },
      data: {
        phone: Number(phone),
        nit: Number(nit),
        reason: String(reason),
        doctor: String(doctor),
        author: {
          connect: {
            email: email
          }
        }
      }
    })
    res.status(201).json({ ok: true, data: orderUpdated })
  } catch (error) {
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Algo salio mal, refresque la página'
    })
  }
}
