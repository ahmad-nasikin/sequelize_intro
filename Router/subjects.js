'use strict'

const express = require('express')
const app = express()
const router = express.Router()
var Sequelize = require('sequelize')
var model = require('../models')

router.get('/', function(req, res) {
  model.Subject.findAll()
  .then(data => {
      res.render('subjects', {datas: data})
  })
})

router.get('/addsubject', function(req, res) {
  res.render('addsubject')
})

router.post('/', function(req, res) {
  model.Subject.create(req.body)
  .then(data => {
    res.redirect('/subjects')
  })
})

router.get('/update/:id', function(req, res) {
  model.Subject.findById(req.params.id)
  .then(dataSubject => {
    res.render('updatesubject', {data: dataSubject})
  })
})

router.post('/update/:id', function(req, res) {
  model.Subject.update(req.body, {
    where: {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/subjects')
  })
})


router.get('/delete/:id', function(req, res) {
  model.Subject.destroy({
    where: {
      id : req.params.id
    }
  })
  .then(datas => {
    res.redirect('/subjects')
  })
})


module.exports = router
