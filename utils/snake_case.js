const fs = require('fs')
const path = require('path')
// const json = require('./const/analisis.json')

function snakeCaseString (str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map(s => s.toLowerCase())
      .join('_')
  )
}

// const nombreCarpeta = snakeCaseString('Clostridum difficile toxinas A y B')
// const nombreCarpeta = snakeCaseString('COPROCULTIVO')
// const nombreCarpeta = snakeCaseString('Coproparasitologico x1')
// const nombreCarpeta = snakeCaseString('Coproparasitologico x2')
// const nombreCarpeta = snakeCaseString('Coproparasitologico x3')
const nombreCarpeta = snakeCaseString('Inv. T. Cruzi')

console.log(nombreCarpeta)
console.log(json)
// const p = path.resolve()

// fs.writeFile(
//   p + '/components/Bio/Compounds/' + `${nombreCarpeta}.js`,
//   '// ' + nombreCarpeta + '\n',
//   err => {
//     if (err) {
//       console.log('ERROR!')
//     } else {
//       console.log('Archivo creado')
//     }
//   }
// )
