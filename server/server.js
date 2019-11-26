const express = require('express');
var cors = require('cors');
const app = express();
const flash = require('connect-flash');
const passport = require('passport');
var session = require('express-session')
//Passport
app.use(passport.initialize());
app.use(passport.session());
require('./app/config/passport')(passport);

app.use(cors())
app.use(flash());
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'restaurant'
});
 // connect to database
mc.connect(function(err){
    if(err)
    console.log("no connected");
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Session
app.use(session({
	secret: 'fjakfh2q73q8hueohda',
	resave: true,
	saveUninitialized: true
}))


var routes = require('./app/routes/appRoutes'); //importing route
routes(app); 