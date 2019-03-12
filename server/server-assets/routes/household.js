let router = require('express').Router()
let Household = require('../models/household')
let Lists = require('../models/list')

//GET ALL A USERS HOUSEHOLDS
router.get('/', (req, res, next) => {
  Household.find({ authorId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET HOUSEHOLD BY ID
router.get('/:id', (req, res, next) => {
  Household.findOne({ _id: req.params.id, authorId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET LISTS BY HOUSEHOLD ID*
router.get('/:id/lists', (req, res, next) => {
  Lists.find({ householdId: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST BOARD IN SESSION
router.post('/', (req, res, next) => {
  req.body.authorId = req.session.uid
  Household.create(req.body)
    .then(newHousehold => {
      res.send(newHousehold)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//EDIT A HOUSEHOLD IN SESSION
router.put('/:id', (req, res, next) => {
  Household.findById(req.params.id)
    .then(household => {
      if (!household.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      household.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated Household")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE A HOUSEHOLD
router.delete('/:id', (req, res, next) => {
  Household.findById(req.params.id)
    .then(household => {
      if (!household.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      household.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted Household")
      });
    })
})


module.exports = router