export const receiptBio = async ({ culo }) => {
  const res = await window.fetch('/api/receipt/receiptBio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    },
    body: JSON.stringify(culo)
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return await res.json()
}
