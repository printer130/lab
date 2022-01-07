import { Search } from 'components/Search'
import { useCallback, useMemo, useState } from 'react'
import reagentsJson from '../../reagents.json'

export default function Reactivos () {
  const [value, setValue] = useState('')

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [value])

  const filteredJson = reagentsJson.filter(reagent => {
    return reagent.name.toLowerCase().includes(value.toLowerCase()) ||
    reagent.brand.toLowerCase().includes(value.toLowerCase()) ||
    reagent.method.toLowerCase().includes(value.toLowerCase())
  })

  const reagents = useMemo(() => filteredJson, [value])

  return (
    <section>
      <h1>Reactivos</h1>
      <Search
        value={value}
        onChange={handleChange}
        placeholder='Buscar reactivo'
      />
      <header>
        <h2>Marca</h2>
        <h2>Reactivo Nombre</h2>
        <h2>Metodo | Tecnica</h2>
      </header>
      <div>
        {
        reagents.map(regeant => {
          return (
            <main key={regeant.name}>
              <p>{regeant.brand}</p>
              <p>{regeant.name}</p>
              <p>{regeant.method} | {regeant.technique}</p>
            </main>
          )
        })
       }
      </div>
      <style jsx>{`
      header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
       }
       div > main:nth-child(2n+1) {
        background-color: #d2f2ff;
       }
       main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
       }
      `}
      </style>
    </section>
  )
}
