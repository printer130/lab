const { PrismaClient } = require('@prisma/client')
// const url = process.env.DATABASE_URL
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
  // console.log('[PRISMA]', prisma)
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

module.exports = { prisma }
