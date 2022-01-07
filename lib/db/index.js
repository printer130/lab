// import { prisma } from 'db/prisma'

// export const getOneOrder = async ({ id }) => {
//   const res = await prisma.user.findUnique({
//     where: {
//       id: +id
//     },
//     select: {
//       email: true,
//       role: true,
//       name: true,
//       id: true,
//       createdAt: true
//     }
//   })
//   console.log({ res })

//   return res
// }

export async function saveReceipt ({
  filteredBox,
  total,
  indebt,
  change,
  find
}) {
  const data = {
    filteredBox,
    total,
    indebt,
    change,
    find
  }
  const res = await window.fetch('/api/savereceipt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/text'
    }
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

export async function saveOrder (order) {
  const response = await window.fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify(order)
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export function normalizedOrder (data) {
  const val = {
    fullName: data.fullName,
    ci: data.ci,
    birth: new Date(data.birth),
    phone: data.phone,
    nit: data.nit,
    reason: data.socialReason,
    sex: data.sex,
    doctor: data.doctor
  }
  return val
}
