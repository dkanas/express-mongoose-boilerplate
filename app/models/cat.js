const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
    minLength: 1
  },
  name: {
    type: String,
    required: true,
    minLenght: 1
  }
})

module.exports = mongoose.model('cats', catSchema)
