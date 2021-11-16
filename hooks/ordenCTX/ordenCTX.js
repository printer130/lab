import { createContext, useContext, useState } from 'react'

export const ordenCTX = createContext()

function ordenProvider ({ children }) {
  const [order, setOrden] = useState()

  const values = {
    order,
    onChangeOrden: setOrden
  }

  return (
    <ordenCTX.Provider value={values}>
      {children}
    </ordenCTX.Provider>
  )
}

export default {
  ordenProvider,
  ordenConsumer: ordenCTX.Consumer
}

export function useOrderCTX () {
  return useContext(ordenCTX)
}
