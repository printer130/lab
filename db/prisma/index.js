// @ts-check
const { PrismaClient } = require('@prisma/client')

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['error']
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

module.exports = { prisma }
