//handles requests

const express = require('express');
const app = express();

const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
var bodyParser = require('body-parser')



// Connect to MongoDB
mongoose.connect('mongodb://localhost/project-node');
var db = mongoose.connection; 

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Express body parser
app.use(express.urlencoded({ extended: true }));


//view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');


//body parser
app.use(bodyParser,json());
app.use(urlencoded({extended : false}));
app.use(cookieParser());


// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

const index_route = require('./api/routes/index');
const users_routes = require('./api/routes/users');


app.use('/', index_route);
app.use('/users', users_routes);

module.exports = app;



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
