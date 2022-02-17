const { PrismaClient } = require('../../prisma/generated/pdf-client.js')

let db_pdf
if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    db_pdf = new PrismaClient()
  } else {
    if (!global.db_pdf) {
      global.db_pdf = new PrismaClient()
    }
    db_pdf = global.db_pdf
  }
}

module.exports = { db_pdf }
