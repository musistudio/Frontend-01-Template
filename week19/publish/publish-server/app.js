var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));

// app.use(function (req, res, next) {
//     var reqData = [];
//     var size = 0;
//     req.on('data', function (data) {
//         console.log('date')
//     });
//     req.on('end', function () {
//         console.log('end')
//     });
//     next();
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);

module.exports = app;
