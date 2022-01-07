// @ts-check
const { PrismaClient } = require('@prisma/client')

let prisma = PrismaClient || undefined

prisma =
  global.prisma ||
  new PrismaClient({
    log: ['error']
  })
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

exports.default = { prisma }
