import { getAge } from 'hooks/dateTime/getAge'
import { usePDF } from 'hooks/usePDF'
import JsPDF from 'jspdf'
import { toast } from 'react-toastify'
import { unique } from 'utils/unique'

export const GeneratePDF = ({ id, data, lab, onLoading, onModal }) => {
  // onLoading(true)
  const el = window.document.querySelector('#' + id)
  const doc = new JsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [612, 793]
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const sex = data.owner.sex === 'male' ? 'Masculino' : 'Femenino'
  doc.setFontSize(10)
  doc.html(el, {
    autoPaging: true,
    // top 0 bottom margin-Left
    margin: [160, 0, 125, 0],
    callback: function (doc) {
      const pageCount = doc.internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        // HEADER
        doc.addImage(lab.image, 'PNG', 0, 0, 150, 0)
        // doc.addImage('/, 'PNG', 0, 0, 150, 0)
        doc.text(166, 25, 'Paciente: ' + data.owner.fullName)
        doc.text(166, 55, 'Edad: ' + getAge(data.owner.birth))
        doc.text(166, 85, 'Género: ' + sex)
        doc.text(166, 115, 'Médico: ' + data.owner.doctor)
        doc.text(320, 55, 'Código: ' + unique({
          labName: data.labName,
          ownerCi: data.owner.ci,
          cuiid: data.cuiid,
          id: data.owner.id
        }))
        doc.text(320, 85, 'Fécha toma de muestra: ' + data.createdAt.slice(0, 10))
        doc.text(320, 115, 'Fécha de impresión: ' + new Date().toLocaleDateString().split('T')[0])
        // FOOTER
        doc.text(pageWidth / 2, 720, 'c. Urpila S/N Frente al Hospital del Nortes', { align: 'center' })
        doc.text(271, 740, '72730216 - 68518882', { align: 'center' })
        doc.text(270, 760, 'Cochabamba - Bolivia', { align: 'center' })
        // Page
        doc.text(530, 760, 'Página ' + doc.internal.getCurrentPageInfo().pageNumber + ' de ' + pageCount)
      }
      // const blob = doc.output('blob')
      // const file = new Blob([blob], { type: 'application/pdf' })
      // const fileURL = URL.createObjectURL(file)
      // console.log('fileURL', fileURL)
      // window.open(fileURL)
      // usePDF({ data: blob, cuiidPDF: data.cuiid, endpoint: '/api/pdf' })
      // .then(res => {
      toast.success('PDF generado.')
      // onLoading(false)
      // onModal()
      doc.save(`${unique({
            id: data.id,
            labName: data.labName,
            ownerCi: data.ownerCi,
            cuiid: data.cuiid
          })}`)
      // })
    }
  })
}
