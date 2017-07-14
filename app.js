'use strict'

const express = require('express')
const bodyParser = require('body-parser')

var app = express();

var index = require('./Router/index');
var teachers = require('./Router/teachers')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/teachers', teachers)




app.listen(3003)
