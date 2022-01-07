import { prisma } from '../../../db/prisma'

export default async function (req, res) {
  const id = req
  console.log({ req })

  try {
    // const order = JSON.parse(req.body)

    // const q = {
    //   ...order,
    //   author: {
    //     connect: {
    //       email: 'bio2@gmail.com'
    //     }
    //   }
    // }

    const res = await prisma.order.findMany({
      where: {
        ci: 1111111
      }
    })

    res.status(201).json({ savedOrder: true })
  } catch (error) {
    res.status(400).json({ message: 'Algo salio mal, refresque la página' })
  }
}
