import { Dialog } from '@headlessui/react'
import { PDFComponent } from 'components/PDF'
import { toast } from 'react-toastify'
import { GeneratePDF } from 'utils/pdf'

function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}

export function OnPDF ({ stateModal, onModal, data, lab, onLoading, loading, onPDFGenerated }) {
  const handleClic = () => {
    toast.info('Generando PDF...')
    // onLoading(true)
    GeneratePDF({ id: 'pdf', data, lab, onLoading, onModal: onPDFGenerated })
    // RendererPDFButton({ id: 'pdf', data, lab })
  }

  if (!data) return <div>Cargando...</div>

  return (
    <Dialog
      className='fixed bg-gray-100 z-50 inset-0 overflow-y-auto mt-12'
      open={stateModal}
      onClose={onModal}
    >
      <PDFComponent id='pdf' pdf data={data} register={register} lab={lab} loading={loading} />
      <button
        onClick={handleClic}
        className={`w-28 ml-4 fixed bottom-4 md:hover:bg-sky-700 bg-sky-600 text-sky-100  border border-solid border-slate-600 h-11 rounded cursor-pointer  ${loading ? 'opacity-60 pointer-events-none' : ''} `}
      >
        Descargar PDF
      </button>
      <button
        className='w-28 ml-36 fixed bottom-4 md:hover:bg-rose-700 bg-rose-500 text-sky-100  border border-solid border-slate-600 h-11 rounded-md'
        onClick={onModal}
      >
        Cancelar
      </button>
    </Dialog>
  )
}
