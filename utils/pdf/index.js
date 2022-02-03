import JsPDF from 'jspdf'

export const GeneratePDF = ({ id }) => {
  const doc = new JsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [867, 1024]
  })

  doc.setFontSize(12)
  doc.html(window.document.querySelector('#' + id), {
    callback: function (doc) {
      doc.save('Arqueo.pdf')
    },
    margin: [
      0, 0, 0, 0
    ]
  })
}
