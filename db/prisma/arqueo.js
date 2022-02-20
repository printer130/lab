// const { PrismaClient } = require('../../prisma/generated/arqueo-client.js')

import { PrismaClient } from './prisma/generated/arqueo-client.js'

let db_arqueo
if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    db_arqueo = new PrismaClient()
  } else {
    if (!global.db_arqueo) {
      global.db_arqueo = new PrismaClient()
    }
    db_arqueo = global.db_arqueo
  }
}

module.exports = { db_arqueo }
