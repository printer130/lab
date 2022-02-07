import JsPDF from 'jspdf'

export const GeneratePDF = ({ id }) => {
  const doc = new JsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [612, 792]
  })

  doc.html(window.document.querySelector('#' + id), {
    callback: function (doc) {
      // doc.putTotalPages()
      doc.save('analisis.pdf')
    },
    margin: [0, 0, 0, 0]
  })
}
