'use strict'


const express = require('express')
const app = express()
const router = express.Router()
var model = require('../models')


router.get('/', function(req, res) {
  model.Subject.findAll().then(data => {
      res.render('subjects', {datas: data})
  })
})



module.exports = router
