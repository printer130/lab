import { prisma } from 'db/prisma'

export default async function (req, res) {
  try {
    const orderCreated = await prisma.user.findMany()
    res.status(201).json({ ok: true, data: orderCreated })
  } catch (error) {
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Algo salio mal, refresque la página'
    })
  }
}
