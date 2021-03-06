var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ejs = require('ejs');

var routes = require('./routes/index');

var app = express();

// 连接数据库
global.db = mongoose.connect('mongodb://127.0.0.1:27017/lab');
global.dbHandle = require('./dbbase/dbHandle.js');

// view engine setup
app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express); // 重点设置
app.set('view engine', 'html');

// 禁用视图缓存
// app.disable('view cache');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置session
app.use(require('cookie-parser')('cookieSecret'));
app.use(require('express-session')());

routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
