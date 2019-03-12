let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'List'


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  householdId: { type: ObjectId, ref: 'Household', required: true }
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)