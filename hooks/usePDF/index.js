
export const usePDF = async ({ endpoint, cuiidPDF = '', data }) => {
  const url = `${endpoint}/${cuiidPDF}`
  console.log('URL', url)
  console.log('DATAHOOK', data)
  const cleaned = JSON.stringify({ cuiidPDF, url })
  console.log('DATAHOOK_CLEANED', cleaned)
  console.log('DATAHOOK_DATA', { data })
  const response = await window.fetch(url, {
    method: 'POST',
    'Content-Type': 'application/octect-stream',
    body: data
  })
  console.log('RESPONSE', response)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}
