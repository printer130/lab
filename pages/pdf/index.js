// import dynamic from 'next/dynamic'
import { PDFComponent } from 'components/PDF'
import { useEffect, useState } from 'react'
import { GeneratePDF } from 'utils/pdf'

function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}

const getOne = ({ cuiid }) => {
  return window.fetch('/api/receipt/getOne/' + cuiid)
    .then(res => res.json())
}

export default function Pdf () {
  const [one, setOne] = useState()

  useEffect(() => {
    getOne({ cuiid: 'ckz4tqxe8000009mlowmlp5sv' })
      .then(setOne)
  }, [])

  const handleClic = () => {
    GeneratePDF({ id: 'pdf' })
  }

  if (!one) return <div>Algo anda mal.</div>

  return (
    <>
      <PDFComponent id='pdf' json={one.data[0].json} register={register} />
      <button
        className='w-28 mt-4 text-blue-700  border border-solid border-slate-600 h-11 rounded-md'
        onClick={handleClic}
      >
        Descargar PDF
      </button>
    </>
  )
}
