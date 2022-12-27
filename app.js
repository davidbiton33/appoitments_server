const mongoose = require('mongoose');
const bodyparser = require('body-parser');
/* const db = require('./config/config').get(process.env.NODE_ENV);
 */const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/*  */

const products = require('./api-management/products/products-controller.js');
const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');



const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//app.use(cookieParser());
app.use(cors());
//app.use('/api/management',express.static(`${__dirname}/api-management/public`))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
//app.use('/users', usersRouter);


app.use('/products', products);


// database connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://davidbiton2:VHXJDU0GL4wsohoh@cluster33.emxbm.mongodb.net/Ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  function (err) {
    if (err) console.log(err);
    console.log("database is connected");
  });





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
