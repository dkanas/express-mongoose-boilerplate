require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./router')

app.use(router)

app.listen(process.env.PORT, () => console.log(`App started on port ${process.env.PORT}!`))
