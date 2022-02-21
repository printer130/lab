const { db_arqueo } = require('../db/prisma/arqueo')
const labId = 'labo0'

async function main () {
  // const response = await db_arqueo.lab.create({
  //  data: {
  //    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  //    lab_name: labId
  //  }
  // })
  // username   String
  // total      Int
  // caja       Int
  // lab        Lab      @relation(fields: [lab_id], references: [lab_name])
  // lab_id     String

  // const response = await db_arqueo.arqueo.create({
  //  data: {
  //    username: 'santi jose perez',
  //    total: 216,
  //    caja: 123,
  //    lab: {
  //      connect: {
  //        lab_name: labId
  //      }
  //    }
  //  }
  // })

  const response = await db_arqueo.arqueo.findMany({
    where: {
      // checkear Lab Name
      createdAt: {
        gt: new Date('2022-02-21T12:51:54.725Z')
      }
    },
    orderBy: [
      {
        // asc | desc
        createdAt: 'desc'
      }
    ]
  })

  const finishDate = response[0].createdAt
  console.log('finishDate', finishDate)

  // const response = await db_arqueo.arqueo.findMany({
  //  where: {
  //    lab_id: labId
  //  },
  //  orderBy: [
  //    {
  //      // asc | desc
  //      createdAt: 'desc'
  //    }
  //  ]
  // })

  return response
}

main()
  .then((res) => {
    console.log('res', res)
  })
  .catch(e => console.warn(e))
  .finally(e => console.log('end'))
