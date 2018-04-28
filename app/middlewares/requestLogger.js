const morgan = require('morgan')

module.exports = morgan('short', {
  skip: (req, res) => res.statusCode < 400,
  stream: process.stdout
})
