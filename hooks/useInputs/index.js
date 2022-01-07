import { useState, useEffect } from 'react'

function useFilter ({ setFilteredBox, checkboxes, verify }) {
  const arr = Object.values(checkboxes)

  const filter = arr.filter((item, i) => {
    return item.isChecked !== false
  })
  setFilteredBox(filter)
}

export function useInputs ({ verify } = { verify: null }) {
  const [checkboxes, setCheckboxes] = useState({})
  const [filteredBox, setFilteredBox] = useState([])

  useEffect(() => {
    // Si no hay verify filtramos
    useFilter({ setFilteredBox, checkboxes, verify })
    // if (verify) {
    // const d = JSON.parse(window.localStorage.getItem('in'))
    // }
  }, [checkboxes, verify])

  return { filteredBox, checkboxes, setCheckboxes }
}
