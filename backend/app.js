var createError = require('http-errors');
var express = require('express');
var path = require('path');
const jwt = require('jsonwebtoken');



var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const connectDB = require('./mongodbConnection/db.connection.js');



var usersRouter = require('./routes/users');
const productRoutes = require('./routes/products');


var app = express();




app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

app.use('/products', productRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler










app.listen(5000, () => {
  console.log('Server is running on port 5000');  // server is listening on port 5000
  connectDB(); // connect to MongoDB database  // connect to MongoDB database when the server is running

})

module.exports = app;
