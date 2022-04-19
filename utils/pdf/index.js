import { getAge } from 'hooks/dateTime/getAge'
import JsPDF from 'jspdf'
import { toast } from 'react-toastify'
import { unique } from 'utils/unique'
import 'jspdf-autotable'
import { useReferenceValue } from 'hooks/useReferenceValue'

const rounded = 3
const heightBox = 13

const ifis = ({ name }) => {
  if (
    name === 'l_k_m_1' ||
    name === 'asma' ||
    name === 'ama' ||
    name === 'resistencia_osmotica' ||
    // hemograma
    name === 'inv_t_cruzi' ||
    name === 'plasma_rico_en_plaq' ||
    name === 'microm_todo_chagas' ||
    name === 'hlb' ||
    name === 'ac_antivimetina' ||
    name === 'ac_antifosfol_pidos_ig_g' ||
    name === 'anticardiolipina_screening' ||
    name === 'anti_dnp' ||
    name === 'anca_3_line' ||
    name === 'anti_ds_dna_ifi' ||
    name === 'anti_dpg_ig_g'
  ) {
    return <></>
  }
  if (
    // hemostasia
    name === 'dos_factor_intriseco' ||
    name === 'dos_factor_extrinseco' ||
    name === 'factor_xiii' ||
    name === 'anti_factor_xa' ||
    name === 'prueba_de_lazo' ||
    // coprologia
    name === 'oxiuros' ||
    // Ensayo de heces
    name === 'verotoxina_e_coli_0157' ||
    name === 'sudam_iii' ||
    // Alergias
    name === 'respiratorio' ||
    name === 'alimenticio' ||
    name === 'pedi_trico' ||
    // Microbiologia
    name === 'tinci_n_de_gram' ||
    name === 'espermocultivo' ||
    name === 'tinta_china' ||
    // Inmunologia
    name === 'rubeola_ig_m' ||
    name === 'influenza_a_b' ||
    name === 'hidatidosis_western_blot' ||
    // Autoinmunologia
    name === 'c_lulas_le' ||
    name === 'citoqui_lcr' ||
    name === 'citoqui_liq_pleural' ||
    name === 'citoqui_liq_ascitico' ||
    name === 'citoqui_liq_sinovial' ||
    name === 'citoqui_liq_pericardio' ||
    name === 'citoqui_liq_peritoneal' ||
    name === 'amonio_lcr' ||
    // Serologia
    name === 'brucelosis' ||
    // Endocrinologia
    name === 'perfil_metab_lico_neonatal' ||
    name === 'prueba_de_reserva_testicular' ||
    // Medio tiempo
    name === 'osmolaridad_urinaria' ||
    name === 'osmolaridad_plasm_tica' ||
    name === 'oximetr_a'
  ) {
    return false
  }
}
const header = ({ doc, data, lab, sex }) => {
  doc.setDrawColor(0)
  doc.setFillColor(244, 244, 244)
  // PACIENTE // LEFT
  // fill
  doc.roundedRect(162, 22, 38, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(200, 22, 250, heightBox, rounded, rounded, 'D')
  // EDAD
  // fill
  doc.roundedRect(162, 45, 25, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(190, 45, 22, heightBox, rounded, rounded, 'D')
  // Genero
  // fill
  doc.roundedRect(162, 75, 34, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(197, 75, 120, heightBox, rounded, rounded, 'D')
  // Medico
  // fill
  doc.roundedRect(162, 105, 32, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(193, 105, 120, heightBox, rounded, rounded, 'D')

  // codigo // RIGHT
  // fill
  doc.roundedRect(319, 45, 29, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(348, 45, 75, heightBox, rounded, rounded, 'D')
  // date // RIGHT
  // fill
  doc.roundedRect(319, 75, 88, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(402, 75, 60, heightBox, rounded, rounded, 'D')
  // impresion // RIGHT
  // fill
  doc.roundedRect(319, 105, 67, heightBox, rounded, rounded, 'F')
  // rectangle
  doc.roundedRect(391, 105, 60, heightBox, rounded, rounded, 'D')
  // LINE SEPARATOR
  doc.setLineWidth(2)
  doc.line(0, 150, 615, 150)

  // HEADER
  doc.addImage(lab.image, 'JPEG', 0, 0, 150, 0)
  // doc.addImage('/, 'PNG', 0, 0, 150, 0)
  doc.text(166, 25, 'Paciente:   ' + data?.owner?.fullName, { baseline: 'hanging' })
  doc.text(166, 55, 'Edad:   ' + getAge(data?.owner?.birth))
  doc.text(166, 85, 'Género:   ' + sex)
  doc.text(166, 115, 'Médico: ' + data?.owner?.doctor)
  doc.text(320, 55, 'Código:  ' + unique({
    labName: data.labName,
    ownerCi: data.owner.ci,
    cuiid: data.cuiid,
    id: data.owner.id
  }))
  doc.text(320, 85, 'Fécha toma de muestra:  ' + data.createdAt.slice(0, 10))
  doc.text(320, 115, 'Fécha de impresión:  ' + new Date().toLocaleDateString().split('T')[0])
}

export const GeneratePDF = ({ id, data, lab, onModal }) => {
  const obj = {}
  const doc = new JsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [612, 793]
  })
  const pageCount = doc.internal.getNumberOfPages()
  const pageWidth = doc.internal.pageSize.getWidth()
  const sexData = data.owner.sex
  const sex = sexData === 'male' ? 'Masculino' : 'Femenino'
  const simple = []
  const complex = []
  data.json.forEach(({ values, name }, i) => {
    const isEmpty = ifis({ name })

    if (isEmpty === false) {
      return isEmpty
    }

    if (typeof values === 'object') {
      complex.push(data.json[i])
    } else {
      simple.push(data.json[i])
    }
  })
  doc.setFontSize(10)

  simple.forEach((item, i) => {
    if (!obj[item.identifier]) {
      obj[item.identifier] = []
      obj[item.identifier].push(simple[i])
    } else {
      obj[item.identifier].push(simple[i])
    }
  })
  const listOfAreas = Object.entries(obj)

  for (const areas of listOfAreas) {
    doc.autoTable({
      margin: [160, 32, 125, 32],
      head: [['Análisis', 'Valor', 'Valor de referencia'], [[areas[0]]]],
      body: areas[1].map(({ values, name, fullName }) => {
        const res = useReferenceValue({ value: name, sex: sexData })
        return [fullName ?? res?.data?.name ?? name, values, res?.data?.full_reference ?? '-']
      }),
      showHead: 'everyPage',
      showFoot: 'everyPage',
      didDrawPage: (infoFromPage) => {
        header({ doc, data, lab, sex })
        // FOOTER
        doc.text(pageWidth / 2, 720, lab?.address ?? '', { align: 'center' })
        doc.text(pageWidth / 2, 740, 'Tel.: ' + lab?.tel0 + ' Cel.: ' + lab?.cel0 + ' - ' + lab?.cel1 + ' - ' + lab?.cel2 + ' Cochabamba - Bolivia', { align: 'center' })
        // doc.text(270, 760, 'Cochabamba - Bolivia', { align: 'center' })
        // Page
        doc.text(530, 760, 'Página ' + doc.internal.getCurrentPageInfo().pageNumber + ' de ' + pageCount)
      }
    })
  }

  for (const i of complex) {
    doc.autoTable({

      margin: [160, 32, 125, 32],
      startY: doc.lastAutoTable.finalY + 10,
      showHead: 'everyPage',
      showFoot: 'everyPage',
      head: [['Analisis', 'Valor', 'Valor de Referencia'], [i.identifier ?? ''], [i.fullName ?? i.name]],
      body: Object.entries(i.values).map(([name, value, fullName]) => {
        const res = useReferenceValue({ value: name, sex: sexData })
        return [fullName ?? res?.data?.fullname ?? name, value, res?.data?.full_reference && '-']
      }),
      didDrawPage: (infoFromPage) => {
        header({ doc, data, lab, sex })
        // FOOTER
        doc.text(pageWidth / 2, 720, lab?.address ?? '', { align: 'center' })
        doc.text(271, 740, '72730216 - 68518882', { align: 'center' })
        doc.text(270, 760, 'Cochabamba - Bolivia', { align: 'center' })
        // Page
        doc.text(530, 760, 'Página ' + doc.internal.getCurrentPageInfo().pageNumber + ' de ' + pageCount)
      }
    })
  }

  doc.setPage(pageCount)

  toast.success('PDF generado.')
  // onModal()
  doc.save(`${unique({
            id: data.id,
            labName: data.labName,
            ownerCi: data.ownerCi,
            cuiid: data.cuiid
          })}`)
}
