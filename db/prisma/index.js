// const { PrismaClient } = require('@prisma/client')

// const prisma =
//   global.prisma ||
//   new PrismaClient({
//     log: ['error']
//   })

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// module.exports = { prisma }
const { PrismaClient } = require('@prisma/client')

let prisma

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }
    prisma = global.prisma
  }
}

module.exports = { prisma }
