const pg = require('pg')
const { Client } = pg

const options = {
  password: 'a3b8pn0o0pd0l4pa',
  host: 'localhost',
  user: 'postgres',
  database: 'leo'
}

const db = new Client(options)

db.connect()
  .then(() => console.log('POSTGRESS CONNECTECT'))
  .catch(e => console.log(e))

const getUsers = db.query('select * from orders')

Promise.resolve(getUsers)
  .then(res => {
    console.log(res.rows)
  })
  .finally(() => db.end())
