const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

// dotenv
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// File Upload
app.use(fileUpload());

// Parsing application/x-www-form-urlcode
app.use(express.static('public'));

// Templating
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: path.join(__dirname, '/views/layouts/partials')
    })
)
app.set('view engine', 'hbs');

// database setting
const db = require('./db_config');

// ROUTING

// END OF ROUTING

app.listen(port, () =>{
    console.log(`Server is running with port ${port}`);
})