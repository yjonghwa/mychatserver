const http = require('http');
const express = require('express');
//const path = require('path');
//const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat');
const deleteRouter = require('/routes/delete');

// middlewares
//const {decode} = require('./middleware/jwt');

//const socketio = require('socket.io');

const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', decode, chatRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

/** Create HTTP server. */
const server = http.createServer(app);

/** Listen on provided port, on all network interfaces. */
server.listen(port);

/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`)
});


// error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
//});

//module.exports = app;
