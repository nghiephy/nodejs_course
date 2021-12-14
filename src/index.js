const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();
const app = express();
const port = 3000;
const hbs = handlebars.create({
    extname: '.hbs',
});

// Display json in view
// app.use(express.json());
// app.use(express.urlencoded());

// Setup static path
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

//Template engine * hbs must be the same with extname dafaut is handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
