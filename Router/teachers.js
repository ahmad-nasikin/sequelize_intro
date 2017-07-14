'use strict'


const express = require('express')
const app = express()
const router = express.Router()
var model = require('../models')


router.get('/', function(req, res) {
  model.Teacher.findAll().then(data => {
      res.render('teachers', {datas: data})
  })
})



module.exports = router
