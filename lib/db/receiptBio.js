import { useRouter } from 'next/router'

export const receiptBio = async ({ culo, onLoading }) => {
  onLoading(true)
  const { replace } = useRouter()
  const res = await window.fetch('/api/receiptBio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    },
    body: JSON.stringify(culo)
  })

  if (res.ok) {
    onLoading(false)
    return replace('/ordenes')
  }

  if (!res.ok) {
    onLoading(false)
    return replace('/ordenes')
  }
}
