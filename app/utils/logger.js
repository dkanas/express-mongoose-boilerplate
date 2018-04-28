const winston = require('winston')
const { combine, timestamp, colorize, printf } = winston.format
const level = process.env.LOG_LEVEL || 'debug'

const format = combine(
  timestamp(),
  colorize(),
  printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
)

const logger = winston.createLogger({
  level,
  format,
  transports: [new winston.transports.Console()]
})

module.exports = logger
