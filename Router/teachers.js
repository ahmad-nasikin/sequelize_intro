'use strict'

const express = require('express')
const app = express()
const router = express.Router()
var Sequelize = require('sequelize')
var model = require('../models')


router.get('/', function(req, res) {
  model.Teacher.findAll().then(data => {
      res.render('teachers', {data: data})
  })
})

router.get('/addteacher', function(req, res) {
  res.render('addteacher')
})

router.post('/', function(req, res) {
  model.Teacher.create(req.body)
  .then(data => {
    res.redirect('/teachers')
  })
})

router.get('/update/:id', function(req, res) {
  model.Teacher.findById(req.params.id)
  .then(dataTeacher => {
    res.render('updateteacher', {data: dataTeacher})
  })
})

router.post('/update/:id', function(req, res) {
  model.Teacher.update(req.body, {
    where: {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/teachers')
  })
})

router.get('/delete/:id', function(req, res) {
  model.Teacher.destroy({
    where: {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/teachers')
  })
})



module.exports = router
