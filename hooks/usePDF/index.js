
export const usePDF = async ({ endpoint, cuiidPDF = '', data }) => {
  const url = `${endpoint}/${cuiidPDF}`
  const cleaned = JSON.stringify({ cuiidPDF, url })
  console.log('DATAHOOK_CLEANED', cleaned)
  console.log('DATAHOOK_DATA', { data })
  const response = await window.fetch(url, {
    method: 'POST',
    'Content-Type': 'application/octect-stream',
    body: data
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}
