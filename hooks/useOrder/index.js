import { useState, useEffect } from 'react'

export function useOrder (data = null) {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    !order && setOrder(data)
  }, [data])

  return {
    order,
    onOrder: setOrder
  }
}
