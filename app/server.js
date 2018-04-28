const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const initDBConnection = require('./db/initDBConnection')
const { requestLogger, errorLogger, errorHandler } = require('./middlewares')
const logger = require('./utils/logger')

function startServer () {
  initDBConnection()
  const app = express()

  app.use(bodyParser.json())
  app.use(requestLogger)
  app.use(errorLogger)
  app.use(router)
  app.use(errorHandler)

  app.listen(process.env.PORT, () => logger.info(`App started on port ${process.env.PORT}!`))
}

module.exports = startServer
