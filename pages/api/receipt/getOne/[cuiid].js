import { prisma } from 'db/prisma'

export default async function (req, res) {
  // const session = await getSession({ req })

  // const { labId } = session.token.user

  // if (!session?.token) {

  //   return res.status(405).json({
  //     message: 'Method not allowed',
  //     data: null
  //   })
  // }
  // const { email, labName } = session.token.user
  // const receiptData = JSON.parse(req.body)


  const labId = 'labo0'
  try {
    const receiptUpdated = await prisma[`receipt${labId}`].findMany({
      where: {
        cuiid: 'ckyk88ad10416tg9ngaw318lu'
      },
      include: {
        owner: true
      }
    })

    return res.status(200).json({ message: 'Receipt Saved!', data: receiptUpdated })
  } catch (error) {
    res.status(500).json({ message: 'Error saving receipt', data: null })
  }
}
