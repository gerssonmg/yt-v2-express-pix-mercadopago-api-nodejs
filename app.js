var createError = require('http-errors');
var express = require('express');
const cors = require('cors'); // Importar o CORS

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var webhooksRouter = require('./routes/v0/webhooks');
var webhooksRouterV1 = require('./routes/v1/webhooks');

var app = express();

app.use(cors()); // Usar o middleware CORS

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/v0/webhook', webhooksRouter); // Adicionar a rota de webhooks
app.use('/v1/webhook', webhooksRouterV1); // Adicionar a rota de webhooks

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
