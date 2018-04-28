const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const initDBConnection = require('./db/initDBConnection')

function startServer () {
  initDBConnection()
  const app = express()
  app.use(bodyParser.json())
  app.use(router)
  app.listen(process.env.PORT, () => console.log(`App started on port ${process.env.PORT}!`))
}

module.exports = startServer
