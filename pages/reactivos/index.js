import { Search } from 'components/Search'
import { useSession } from 'next-auth/react'
import { useCallback, useMemo, useState } from 'react'
import novavid from 'reagents/novavid.json'

export default function Reactivos () {
  const [value, setValue] = useState('')
  const session = useSession()
  // session?.data?.token?.user?.role
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [value])

  const filteredJson = novavid.filter(reagent => {
    return reagent.name.toLowerCase().includes(value.toLowerCase()) ||
    reagent.reagent_brand.toLowerCase().includes(value.toLowerCase()) ||
    reagent?.method?.toLowerCase().includes(value.toLowerCase())
  })

  const reagents = useMemo(() => filteredJson, [value])

  if (session?.data?.token?.user?.role === 'RECEPTIONIST' |
  session?.data?.token?.user?.role === 'ADMIN'
  ) {
    return <div>Nada que ver aqui.</div>
  }
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
              <p>{regeant.reagent_brand}</p>
              <p>{regeant.name}</p>
              <p>{regeant.method} | {regeant.technique}</p>
            </main>
          )
        })
       }
      </div>
      <style jsx>{`
      p {
        font-size: 16px;
        padding: 8px 4px;
      }
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
