'use strict'

const express = require('express')
const app = express()
const router = express.Router()
var Sequelize = require('sequelize')
var model = require('../models')

router.get('/', function(req, res) {
  model.Students.findAll()
  .then(data => {
    res.render('students', {datas: data})
  })
})

router.get('/addstudents', function(req, res) {
  res.render('addstudents')
})

router.post('/', function(req, res) {
  model.Students.create(req.body)
  .then(data => {
    res.redirect('/students')
  })
})

router.get('/update/:id', function(req, res) {
  model.Students.findById(req.params.id)
  .then(dataStudent => {
    console.log(dataStudent);
    res.render('updatestudent', {data: dataStudent})
  })
})

router.post('/update/:id', function(req, res) {
  model.Students.update(req.body, {
    where: {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/students')
  })
})

router.get('/delete/:id', function(req, res) {
  model.Students.destroy({
    where: {
      id : req.params.id
    }
  })
  .then(datas => {
    res.redirect('/students')
  })
})

module.exports = router
