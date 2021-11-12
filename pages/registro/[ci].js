import { useRouter } from 'next/router'
import { getDocByCI } from 'db/firebase/firestore'
import { useEffect, useState } from 'react'

export default function RegisterNewCI () {
  const router = useRouter()
  const [byCI, setByCI] = useState()
  const { ci } = router.query
  // Error Handler !important
  useEffect(() => {
    ci && getDocByCI({ ci })
      .then(setByCI)
  }, [ci])

  return (
    <div>
      {
        byCI
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
    </div>
  )
}
