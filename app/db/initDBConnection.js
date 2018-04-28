const mongoose = require('mongoose')
const logger = require('../utils/logger')

function initDBConnection () {
  mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    const { host, port } = mongoose.connection.db.serverConfig
    const { databaseName } = mongoose.connection.db
    logger.info(`Successfully connected to DB: \n Host: ${host} \n Port: ${port} \n Database: ${databaseName}`)
  })
  .catch(err => logger.error(err))
}

module.exports = initDBConnection
