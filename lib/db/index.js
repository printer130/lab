export async function saveReceipt ({
  filteredBox,
  total,
  indebt,
  change,
  find
}) {
  try {
    const res = await window.fetch('/api/saveReceipt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/text'
      },
      body: JSON.stringify({
        filteredBox,
        total,
        indebt,
        change,
        find
      })
    })
    if (!res?.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  } catch (error) {
    console.log('ERROR')
  }
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
    reason: data.reason,
    sex: data.sex,
    doctor: data.doctor
  }
  return val
}
