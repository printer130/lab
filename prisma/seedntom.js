// const { prisma } = require('../db/prisma')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main () {
  // const res = {}
  // const res = await prisma.post.create({
  //   data: {
  //     title: 'How to be Bob',
  //     categories: {
  //       create: [
  //         {
  //           assignedBy: 'Bob',
  //           assignedAt: new Date(),
  //           category: {
  //             create: {
  //               name: 'New category'
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   }
  // })

  const res = await prisma.post.create({
    data: {
      title: 'How to be Bob',
      categories: {
        create: [
          {
            assignedBy: 'Bob',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 9
              }
            }
          },
          {
            assignedBy: 'Bob',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 22
              }
            }
          }
        ]
      }
    }
  })

  // const res = await prisma.user.findMany({})

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
