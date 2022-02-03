// import dynamic from 'next/dynamic'
import { PDFComponent } from 'components/PDF'
import { GeneratePDF } from 'utils/pdf'

// function register (name, options) {
//   const onChange = function (e) {}
//   return { name, onChange, ...options }
// }

const handleClic = () => {
  GeneratePDF({ id: 'pdf' })
}

export default function Pdf () {
  return (
    <>
      <PDFComponent id='pdf' />
      <button
        className='w-28 mt-4 text-blue-700  border border-solid border-slate-600 h-11 rounded-md'
        onClick={handleClic}
      >
        Descargar PDF
      </button>
    </>
  )
}
