const express = require('express')
const app = express()
const router = require('./router')
const initDBConnection = require('./db/initDBConnection')

function startServer () {
  initDBConnection()

  app.use(router)
  app.listen(process.env.PORT, () => console.log(`App started on port ${process.env.PORT}!`))
}

module.exports = startServer
