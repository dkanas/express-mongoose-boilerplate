const Cat = require('../models/cat')

module.exports = catController = {
  create: (req, res, next) => {
    const { name, color } = req.body

    const newCat = new Cat({ name, color })
    newCat
      .save()
      .then(cat => res.json(cat))
      .catch(next)
  },
  list: (req, res, next) => {
    Cat
      .find()
      .lean()
      .then(cats => res.json(cats))
      .catch(next)
  },
  get: (req, res, next) => {
    Cat
      .findById(req.params.id)
      .lean()
      .then(cat => cat ? res.json(cat) : res.status(404).json({ message: 'Cat not found' }))
      .catch(next)
  },
  update: (req, res, next) => {
    const { name, color } = req.body

    Cat
      .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then(cat => cat ? res.json(cat) : res.status(404).json({ message: 'Cat not found' }))
      .catch(next)
  },
  delete: (req, res, next) => {
    Cat
      .findByIdAndRemove(req.params.id)
      .then(cat => cat
        ? res.json({ message: 'Cat removed successfully!' })
        : res.status(404).json({ message: `Cat not found` }))
  }
}
