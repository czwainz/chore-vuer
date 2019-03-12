let router = require('express').Router()
let Lists = require('../models/list')
let Tasks = require('../models/task')


//POST A LIST IN A BOARD
router.post('/', (req, res, next) => {
  req.body.authorId = req.session.uid
  Lists.create(req.body)
    .then(newList => {
      res.send(newList)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET TASK BY LIST ID
router.get('/:id/tasks', (req, res, next) => {
  Tasks.find({ listId: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//EDIT A LIST IN A BOARD
router.put('/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      // if (!list.boardId.equals(req.session.uid)) {
      //   return res.status(401).send("ACCESS DENIED!")
      // }
      list.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE A LIST IN A BOARD
router.delete('/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      list.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted")
      });
    })
})


module.exports = router