let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let comment = new Schema({
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
},
  { timestamps: true })


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  householdId: { type: ObjectId, ref: 'Household', required: true },
  comments: [comment]
},
  { timestamps: true, usePushEach: true })


module.exports = mongoose.model(schemaName, schema)