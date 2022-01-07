import { getSession } from 'next-auth/react'
import { prisma } from 'db/prisma'

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getSession({ req })

  const order = JSON.parse(req.body)
  const { email } = session.token.user

  const q = {
    ...order,
    author: {
      connect: {
        email: email
      }
    }
  }

  try {
    const orderCreated = await prisma.order.create({ data: q })
    res.status(201).json({ ok: true, data: orderCreated })
  } catch (error) {
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Algo salio mal, refresque la página'
    })
  }
}
