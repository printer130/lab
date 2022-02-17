const { db_pdf } = require('../db/prisma/pdf')

async function main () {
/*   const response = await db_pdf.pdf.findMany({}) */
  /* const b = new Buffer.from(['asdasdasdasd'])
  console.log(b) */
  /* const response = await db_pdf.pdf.findMany({})
  return response */
  // id: 'ckzixq49y0000fvkn0ks471ao' -> ARRAYBYTES
  // ckzmu1ycu0000xcknyo81wzt3  -> STRING
  const res = await db_pdf.pdf.findUnique({
    where: {
      id: 'ckzmu1ycu0000xcknyo81wzt3'
    }
  })
  return res
}

main()
  .then((res) => {
    return res
    // console.log(typeof res)
    // const q = window.URL.createObjectURL(res)
    // window.open(q)
  })
  .catch(e => console.warn(e))
  .finally(e => console.log('end'))
