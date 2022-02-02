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
      <h1>hola</h1>
      <PDFComponent id='pdf' />
      <button
        className='w-20 text-pink-200 bg-black-600 h-11'
        onClick={handleClic}
      >
        Descargar PDF
      </button>
    </>
  )
}
