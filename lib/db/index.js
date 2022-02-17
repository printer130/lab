export async function saveReceipt ({
  filteredBox,
  total,
  indebt,
  change,
  find
}) {
  try {
    const res = await window.fetch('/api/receipt/saveReceipt', {
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
      return { data: null, ok: false }
      // throw new Error(res.statusText)
    }
    return await res.json()
  } catch (error) {
    console.log('ERROR')
  }
}

export async function saveOrder (order, disable) {
  if (disable) {
    // Update
    const response = await window.fetch('/api/orders/update', {
      method: 'PUT',
      body: JSON.stringify(order)
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } else {
    // Create
    const response = await window.fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order)
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  }
}

export async function deleteOrder ({ cuiid }) {
  const response = await window.fetch(`/api/receipt/deleteReceipt/${cuiid}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}
export async function getRangeDate ({ startDate, endDate }) {
  const response = await window.fetch(`/api/rangeDates?s=${startDate}&e=${endDate}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export async function createArqueo ({ caja, total }) {
  const response = await window.fetch('/api/arqueo', {
    method: 'POST',
    body: JSON.stringify({ caja, total })
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
