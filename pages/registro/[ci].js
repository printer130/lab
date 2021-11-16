/* eslint-disable react/jsx-indent */
import { useRouter } from 'next/router'
import { getDocByCI } from 'db/firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { Button } from 'components'
import {
  ELECTROLITOS,
  ELECTROLITOS2,
  ELECTROLITOS3,
  ELECTROLITOS4,
  MICROBIOLOGIA,
  CROPOLOGIA,
  ELECTROLITOS5,
  EMBARAZO,
  LIQUIDOS_BIOLOGICOS,
  MARCADORES_TUMORALES,
  SEROLOGIA,
  ENSAYO_EN_HECES,
  DROGAS_DE_ABUSO,
  PANEL_DE_ALERGIAS,
  MEDIO_INTERNO
} from 'utils/orderDicc'
import { ListOfAnalisys } from 'components/ListOfAnalisys'

export default function RegisterNewCI () {
  const [search, setSearch] = useState('')
  const [checkboxes, setCheckboxes] = useState({})
  const { query } = useRouter()
  const router = useRouter()
  const [byCI, setByCI] = useState(null)
  const { ci } = query
  // Error Handler !important
  useEffect(() => {
    ci && getDocByCI({ ci })
      .then(setByCI)
  }, [ci])

  const handleOrder = (e) => {
    e.preventDefault()
    //
    router.push('/registro')
  }

  const handleSearch = e => {
    console.log(e.target)
    setSearch(e.target.value)
    // setSearch(e.target)
  }

  // const filterChecked = ELECTROLITOS.filter(w => checkboxes[w] === true)
  const filtered = ELECTROLITOS.filter(w =>
    w.toLowerCase().includes(search.toLowerCase())
  )
  const memoizationList = useMemo(() => filtered, [search])

  const handleCheckbox = ({ target }) => {
    const checked = target.checked
    const name = target.name
    setCheckboxes({
      ...checkboxes,
      [name]: checked
    })
  }

  return (
    <section>
      {
        byCI?.fullName
          ? <>
            <h3>Nuevo registro con CI: {ci} </h3>
            <h5>Nombre: {byCI.fullName}</h5>
            <h5>NIT: {byCI.nit}</h5>
            <h5>Nro: {byCI.ordenNumber}</h5>
            <h5>Telefono: {byCI.phone}</h5>
            <h5>Razon Social: {byCI.socialReason}</h5>
            </>
          : <h1>Cargando... </h1>
      }
      <input
        placeholder='Buscar...'
        type='search'
        value={search}
        onChange={handleSearch}
      />
      <form
        onSubmit={handleOrder}
      >
        <main>
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={memoizationList}
            title='ELECTROLITOS'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={ELECTROLITOS2}
            title='ELECTROLITOS2'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={ELECTROLITOS3}
            title='ELECTROLITOS3'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={ELECTROLITOS4}
            title='ELECTROLITOS4'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={ELECTROLITOS5}
            title='ELECTROLITOS5'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={CROPOLOGIA}
            title='Cropologia'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={MICROBIOLOGIA}
            title='Microbiologia'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={EMBARAZO}
            title='Embarazo'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={LIQUIDOS_BIOLOGICOS}
            title='Liquidos Biologicos'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={MARCADORES_TUMORALES}
            title='Marcadores Tumorales'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={SEROLOGIA}
            title='SEROLOGIA'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={ENSAYO_EN_HECES}
            title='ENSAYO EN HECES'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={DROGAS_DE_ABUSO}
            title='DROGAS_DE_ABUSO'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={PANEL_DE_ALERGIAS}
            title='Panel de alergias'
          />
          <ListOfAnalisys
            onChange={handleCheckbox}
            listOfAnalisys={MEDIO_INTERNO}
            title='Medio Interno'
          />
        </main>
        <Button>Guardar</Button>
      </form>
      <style jsx>{`
        form {
          display:flex;
          flex-direction: column;
        }
        section {
          width: 100%;
        }
        main {
          display: grid;
          place-content: center;
          grid-template-columns: repeat(auto-fit, 250px);
        }
      `}
      </style>
    </section>
  )
}
