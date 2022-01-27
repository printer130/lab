import { useState, useEffect } from 'react'

export function useDebounce ({ search, delay }) {
  const [debouncedValue, setDebouncedValue] = useState(null)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [search, delay])
  return debouncedValue
}
