import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { PDFComponent } from 'components/PDF'
import { GeneratePDF } from 'utils/pdf'

function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}

export function OnPDF ({ stateModal, onModal, data }) {
  const handleClic = () => {
    GeneratePDF({ id: 'pdf' })
  }

  if (!data) return <div>Cargando...</div>
  // className='z-50 relative top-0 bottom-0 w-full min-w-full h-full min-h-[1024px]'
  return (
    <Dialog
      className='fixed bg-gray-100 z-50 inset-0 overflow-y-auto'
      open={stateModal}
      onClose={onModal}
    >
      <PDFComponent id='pdf' json={data?.json} register={register} />
      <button
        className='w-28 ml-4 fixed bottom-4 md:hover:bg-sky-700 bg-sky-600 text-sky-100  border border-solid border-slate-600 h-11 rounded-md'
        onClick={handleClic}
      >
        Descargar PDF
      </button>
      <button
        className='w-28 ml-32 fixed bottom-4 md:hover:bg-sky-700 bg-rose-500 text-sky-100  border border-solid border-slate-600 h-11 rounded-md'
        onClick={onModal}
      >
        Cancelar
      </button>
    </Dialog>
  )
}
