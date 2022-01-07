// const fs = require('fs')
// const path = require('path')
// // import * as json from './const/analisis.json'
// const jsonData = require('./const/analisis.json')
// function snakeCaseString (str) {
//   return (
//     str &&
//     str
//       .match(
//         /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
//       )
//       .map(s => s.toLowerCase())
//       .join('_')
//   )
// }
// // import { DICTIONARY } from './const/DICTIONARY.js'

// const newDate = jsonData.map((item, index) => {
//   return {
//     ...item,
//     list: [
//       ...item.list.map(d => {
//         return {
//           value: d.value,
//           price: d.price,
//           map: snakeCaseString(d.value)
//         }
//       })
//     ]
//   }
// })
// const raw = Buffer.from(JSON.stringify(newDate))
// // console.log(JSON.parse(raw))
// fs.writeFileSync(path.resolve() + '/const/data.json', raw.toString(), err => {
//   if (err) {
//     console.log('ERROR!')
//   } else {
//     console.log('Archivo creado')
//   }
// })
// // console.log(DICTIONARY)
// // console.log(newDate)
// // newDate.map(item => {
// //   return console.log(item.list)
// // })

// const data = {
//   aptt: '34.34',
//   ca_en_orina: '3.35',
//   toxoplasmosis_hai: '2342',
//   anti_m_b_g: '3432.34',
//   azucares_reductores: 'positivo',
//   covid_19_ac_neutralizantes: '32412',
//   covid_19_ag_nasal: 'negativo',
//   parasitol_gico_concentrado: {
//     fisico_quimico: {
//       aspecto: 'jnd2jnjnk',
//       color: 'jnjkdnaksjndj',
//       consistencia: 'asjnd',
//       ph: '24'
//     },
//     microscopico: {
//       eritrocitos: 'kjd jkas dja ',
//       flora_microbiana: 'kdmaidmskm',
//       leucocitos: 'ajs djk ',
//       levaduras: 'jdnaksndakdnkm',
//       protozooarios: '3njnajksndj',
//       vermes: 'ndkjanjd 2ak a'
//     }
//   }
// }

// const d = '2022-01-04T03:29:56.168Z'
// const formatter = new Intl.DateTimeFormat('es-BO')
// const now = new Date()
// const now = new Date(d).toLocaleTimeString()
// 11:29:56 PM

const now = new Date()
// 1/3/2022, 11:29:56 PM

// const now = new Date(d).toLocaleDateString()
// 1/3/2022
console.log(new Date(now).getUTCDay())
// console.log(formatter.format(now))

// const res = new Date(d)

// res.setHours(0, 0, 0, 0)
// console.log(res)
