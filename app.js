var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tabletRouter = require('./routes/tablet');
var gridBuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var tablet = require("./models/tablet");
var resourcesRouter = require("./routes/resources");

var app = express();

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
app.use('/tablets', tabletRouter);
app.use('/gridbuild', gridBuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourcesRouter);



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

async function recreateDB(){
  // Delete everything
  await tablet.deleteMany();
  let instance1 = new tablet({tablet_name:"Dolo 650", company_name:'Dolo',tablet_dosage:25.4});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });

  let instance2 = new tablet({tablet_name:"Acelo", company_name:'Glenmark',tablet_dosage:15.5});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });

  let instance3 = new tablet({tablet_name:"Paracetmol", company_name:'Aurbindho',tablet_dosage:1.5});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Thrid object saved")
  });

 }


 
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;


