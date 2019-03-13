var mongoose = require('mongoose')
var connectionString = 'mongodb://student1:student1@ds115411.mlab.com:15411/chore-vuer'
var connection = mongoose.connection


mongoose.connect(connectionString, { useNewUrlParser: true })

mongoose.PromiseProvider = Promise

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})