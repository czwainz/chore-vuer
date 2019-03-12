let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Household'

let Lists = require('./list')
let Tasks = require('./task')

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  authorId: { type: ObjectId, ref: 'User', required: true }
})

schema.pre('remove', function (next) {
  // @ts-ignore
  Promise.all([
    Tasks.deleteMany({ householdId: this._id }),
    Lists.deleteMany({ householdId: this._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})


module.exports = mongoose.model(schemaName, schema)