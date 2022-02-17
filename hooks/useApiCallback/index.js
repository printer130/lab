import { useEffect, useState } from 'react'

const fetchApi = ({ endpoint, cuiid = '' }) => {
  const url = `${endpoint}/${cuiid}`
  return window.fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
}

export const useApiCallback = function ({ endpoint, cuiid }) {
  const [isLoadingPost, setLoadingPost] = useState(false)
  const [apiResponse, setApiResponse] = useState(null)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    if (!apiResponse?.ok) {
      setLoadingPost(true)
      setApiError(null)
      fetchApi({ endpoint, cuiid }).then(res => {
        setLoadingPost(false)
        setApiResponse(res)
      }).catch(setApiError)
    }
    return { apiResponse }
  }, [endpoint])
  return { isLoadingPost, apiResponse, apiError }
}
