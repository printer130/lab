import { useState, createContext, useContext } from 'react'

const Context = createContext([])

export function InputProvider ({ children }) {
  const [inputsChecked, setInputsChecked] = useState([])
  // const {
  //   filteredBox,
  //   checkboxes,
  //   setCheckboxes
  // } = useInputs({ verify })
  // // const value = ['pepe']
  // console.log({ checkboxes })
  // console.log({ filteredBox })
  const value = {
    setInputsChecked,
    inputsChecked
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export function ctxInputs () {
  return useContext(Context)
}
