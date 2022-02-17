import { getSession } from 'next-auth/react'

export default async function (req, res) {
  const session = await getSession({ req })
  const { labId, name, email } = session?.token?.user

  const { caja, total } = JSON.parse(req.body)

  try {
    const arqueo = await db_arqueo.arqueo.create({
      data: {
        username: name ?? email,
        total: Number(total),
        caja: Number(caja),
        lab: {
          connect: {
            lab_name: labId
          }
        }
      }
    })
    res.status(200).json({ ok: true, data: arqueo, error: false })
  } catch (error) {
    res.status(500).json({ ok: false, data: null, error: true })
  }
}
