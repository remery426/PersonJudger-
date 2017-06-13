<<<<<<< HEAD
var express = require('express')
var app = express();
var bp = require("body-parser")
var path = require("path")
var port = 8000;
var session = require("express-session")
app.use(session({
    secret: 'Chris Kim',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(bp.json());
app.use(express.static(path.join(__dirname+'/client')))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.use(express.static(path.join(__dirname+'/node_modules')))
app.listen(port, function(){
    console.log("server running on " + port)
})
=======
var express = require('express')
var app = express();
var bp = require("body-parser")
var path = require("path")
var port = 8000;
var session = require("express-session")
app.use(session({
    secret: 'Chris Kim',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(bp.json());
app.use(express.static(path.join(__dirname+'/client')))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.use(express.static(path.join(__dirname+'/node_modules')))
app.listen(port, function(){
    console.log("server running on " + port)
})
>>>>>>> 11a0a7ae59c940f693e45bce5a5b907df89f75f0
