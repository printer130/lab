// const { prisma } = require('../db/prisma')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// const res = 1 || null
async function main () {
  // const res = {}

  // await prisma.user.deleteMany({})

  // await prisma.order.deleteMany({})
  // await prisma.receipt.deleteMany({})
  // await prisma.lab.deleteMany({})

  // CREATE LAB
  const labId = 'labo0'

  // const res = await prisma.lab.create({
  //   data: {
  //     name: 'labo0'
  //   }
  // })

  // const res = await prisma.user.create({
  //   data: {
  //     role: 'BIOCHEMICAL',
  //     email: 'prisma@gmail.com',
  //     name: 'prisma0',
  //     password: 'prisma',
  //     lab: {
  //       connect: {
  //         name: 'labo0'
  //       }
  //     }
  //   }
  // })

  // ckykex7t50303449n44gzyyec -> EMBARAZO
  // ckyk88ad10416tg9ngaw318lu -> HEMOSTASIA
  const res = await prisma[`receipt${labId}`].findMany({
    where: {
      createdAt: {
        gte: new Date('2022-01-21')
      }
    },
    include: {
      owner: true
    }
  })

  // res.map(item => {
  //   return console.log(item.json)
  // })

  // FIND USER
  // const res = await prisma.user.findUnique({
  //   where: {
  //     email: 'leonardobio@gmail.com',
  //     password: 'leonardo'
  //   },
  //   select: {
  //     email: true,
  //     role: true,
  //     name: true,
  //     id: true,
  //     createdAt: true
  //   }
  // })

  // CREATE ORDER
  // const res = await prisma.order.create({
  //   data: {
  //     fullName: 'la pizza del año nuevo',
  //     ci: 4861198,
  //     phone: 864591,
  //     nit: 9438561,
  //     birth: new Date('Tuesday, November 27, 2018, 20:00:00 GMT-4'),
  //     reason: 'asdasdasd',
  //     sex: 'mujer',
  //     doctor: 'docasdasdtor',
  //     author: {
  //       connect: {
  //         email: 'prisma@gmail.com'
  //       }
  //     }
  //   }
  // })

  // FIND USER
  // const res = await prisma.user.findMany()
  // FIND ORDER
  // const res = await prisma.order.findMany({})

  // SEACH ORDER
  // const res = await prisma.order.findMany({
  //   where: {
  //     ci: {
  //       search: 'cat dog'
  //     }
  //   }
  // })

  // const res = await prisma.order.findMany({
  //   where: {
  //     ci: {
  //       contains: 'evo'
  //     }
  //   }
  // })

  // // FIND ALL ORDERS
  // const res = await prisma.order.findUnique({
  //   where: {
  //     ci: 5316840
  //   },
  //   include: {
  //     author: true
  //   }
  // })

  // UPDATE ORDER
  // const res = await prisma.order.update({
  //   where: { ci: 333333 },
  //   data: { fullName: 'Leonardo cambiado' }
  // })

  // UPDATE RECEIPT
  // const list = [
  //   {
  //     createdAt: new Date(),
  //     v: 35
  //   },
  //   {
  //     createdAt: new Date(),
  //     v: 50
  //   }
  // ]
  // const res = {}
  // const total = 300
  // const d = [{ indebt: 51 }, { indebt: '50' }, { indebt: '111' }]
  // d.map((item, index, list) => {
  //   console.log('TOTAL', total - reducir(index))
  // })

  // function reducir (indece) {
  //   const result = d
  //     .slice(0, indece + 1)
  //     .reduce((acc, cur) => acc + cur.indebt, 0)
  //   return result
  // }
  // console.log(d.slice(0, ))
  // const newIndebtList = d.push({ indebt: sal })
  // console.log({ newIndebtList })
  // const res = await prisma.receipt.update({
  //   where: {
  //     cuiid: 'ckxpcu3qa0000v4tpqqamqu1j'
  //   },
  //   data: {
  //     json: [
  //       ['caca', 23],
  //       ['adasd', 23423]
  //     ]
  //   }
  // })

  // DELETE ORDER
  // const res = await prisma.order.delete({
  //   where: { ci: 333333 },
  // })

  // CREATE RECEIPT TO OWNER
  // const r = Object.keys(d)
  // const receiptTarget = 'Receiptlabo'

  // const res = await prisma[`receipt${labId}`].create({
  //   data: {
  //     json: ['15', '15'],
  //     total: 250,
  //     itotal: 75,
  //     labName: labId,
  //     saldo: 175,
  //     indebtList: { indebt: 75 },
  //     owner: {
  //       connect: {
  //         ci: '123123'
  //       }
  //     }
  //   }
  // })

  // const res = await prisma.receipt.create({
  //   data: {
  //     json: [
  //       {
  //         name: 'Hemograma',
  //         isChecked: true,
  //         price: 23
  //       },
  //       {
  //         name: 'Grupo y Rh',
  //         isChecked: true,
  //         price: 234
  //       }
  //     ],
  //     total: 15,
  //     indebt: 10,
  //     saldo: 5,
  //     owner: {
  //       connect: {
  //         id: 1
  //       }
  //     },
  //     lab: {
  //       connect: {
  //         name: 'El laboratorio'
  //       }
  //     }
  //   }
  // })

  // CREATE RECEIPT TO DOCTOR
  // id => When crate new order id must be returned
  // labName => Taking from logged user
  // ownerCi => When crate new order id must be returned
  // let res = null
  // const res = await prisma.receipt.findMany({
  //   where: {
  //     labName: {
  //       contains: 'la'
  //     }
  //   },
  //   include: {
  //     owner: true
  //   }
  // })
  // Filtering receipts by date
  // const res = await prisma.receipt.findMany({
  //   where: {
  //     createdAt: {
  //       gte: new Date('2022-01-04')
  //     }
  //   }
  // })

  // DELETE RECEIPT
  // const res = await prisma.receipt.delete({
  //   where: {
  //     cuiid: 'ckxpdnftf0000w4tpcfewesj4'
  //   }
  // })
  // const res = await prisma.receipt.findUnique({
  //   where: {
  //     receipt_id: {
  //       id: 7,
  //       labName: 'leonardo',
  //       ownerCi: 77777776
  //     }
  //   },
  //   select: {
  //     id: true,
  //     cuiid: false,
  //     json: true,
  //     createdAt: false,
  //     saldo: true,
  //     total: true,
  //     labName: true,
  //     indebtList: true,
  //     updatedAt: false,
  //     ownerCi: true
  //   }
  // })

  // GETALL GROUPED
  // const res = await prisma.receipt.groupBy({
  //   by: ['labName'],
  //   where: {
  //     labName: {
  //       contains: 'El labo'
  //     }
  //   },
  //   _sum: {
  //     total: true
  //   },
  //   having: {
  //     total: {
  //       _min: {
  //         gte: 5
  //       }
  //     }
  //   }
  // })

  // const res = await prisma.receipt.findMany({
  //   where: {
  //     labName: {
  //       startsWith: 'El labo'
  //     }
  //   },
  //   include: {
  //     owner: true
  //   }
  // })

  // const res = await prisma.order.findUnique({
  //   where: {
  //     ci: 4234234
  //   },
  //   include: {
  //     receipt: true,
  //     author: {
  //       select: {
  //         id: false,
  //         createdAt: false,
  //         role: false,
  //         name: false,
  //         password: false,
  //         email: false,
  //         labId: true
  //       }
  //     }
  //   }
  // })

  return res
}

main()
  .then(data => {
    console.log('[RES]', data)
    // data.json.map(d => console.log(d))
  })
  .catch(e =>
    console.error('[ERROR]', e).finally(async () => {
      await prisma.$disconnect()
    })
  )
