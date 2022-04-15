// import { useReferenceValue } from './hooks/useReferenceValue.js'

const complex = [
  {
    fullName: 'IL - 6',
    identifier: 'QUÍMICA METABÓLICA',
    isChecked: true,
    name: 'il_6_simple',
    price: 234,
    values: {
      basofilos: '18',
      blastos: '9',
      c_hb_c_m: '8',
      cayados: '13',
      eosinofilos: '17',
      globulos_blancos: '2',
      globulos_rojos: '1',
      hb_c_m: '7',
      promielocitos: '10'
    }
  },
  {
    fullName: 'Micoplasma - IgG',
    identifier: 'INMUNOLOGÍA',
    isChecked: true,
    name: 'micoplasma_ig_g_simple',
    price: 234,
    values: {
      globulos_rojos: '1',
      hb_c_m: '7'
    }
  }
]

const q = Object.entries(complex[0].values)

console.log(q)
