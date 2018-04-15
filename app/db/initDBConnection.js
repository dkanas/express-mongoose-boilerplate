const mongoose = require('mongoose')

function initDBConnection () {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      const { host, port } = mongoose.connection.db.serverConfig
      const { databaseName } = mongoose.connection.db
      console.log(`Successfully connected to DB: \n Host: ${host} \n Port: ${port} \n Database: ${databaseName}`)
    })
    .catch(console.error)
}

module.exports = initDBConnection
