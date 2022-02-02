import JsPDF from 'jspdf'

export const GeneratePDF = ({ id }) => {
  const doc = new JsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [595, 843]
  })

  doc.addImage('/pege.jpeg', 'JPEG', 100, 100, 595, 842)

  doc.html(window.document.querySelector('#' + id), {
    callback: function (doc) {
      doc.save('Arqueo.pdf')
    },
    margin: [
      0, 0, 0, 0
    ]
  })
}
