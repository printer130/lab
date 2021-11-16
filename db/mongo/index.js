const { MongoClient } = require('mongodb')

async function run () {
  const URI = 'mongodb+srv://hola:hola@cluster0.yfxun.mongodb.net/hola?retryWrites=true&w=majority'
  const client = new MongoClient(URI)
  try {
    await client.connect()
    await listDatabases(client)
    // await client.db('admin').command({ ping: 1 })
    // console.log('Connected successfully to server')
  } finally {
    await client.close()
  }
}

async function listDatabases (client) {
  const databasesList = await client.db().admin().listDatabases()

  console.log('Databases:')
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
};

run().catch(console.dir)
