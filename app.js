'use strict'

const express = require('express')
const bodyParser = require('body-parser')

var app = express();

var index = require('./Router/index');
var teachers = require('./Router/teachers')
var subjects = require('./Router/subjects')
var students =  require('./Router/students')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)





app.listen(3000)
