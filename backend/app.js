var createError = require('http-errors');
var express = require('express');
var path = require('path');
const jwt = require('jsonwebtoken');




var usersRouter = require('./routes/users');



var app = express();






app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


module.exports = app;
