const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
const path = require('path');
const usersRouter = require('./routes/users');

dotenv.config();

var adminRouter = require('./routes/admin');
var authRouter = require('./routes/auth');

var app = express();


mongoose.connect('mongodb://localhost:27017/brain-blitz')
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch((error)=> {
    console.log('An error occured', error);
});

app.use(logger('dev'));
app.use(express.json());   
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/v1/auth', authRouter);
app.use('/v1/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development    
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
