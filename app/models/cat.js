const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  color: String,
  name: String
})

module.exports = mongoose.model('cats', catSchema)
