var express = require('express');
var app = express();
var homePage = require('./routes/homePage');

app.use('/', homePage);
app.listen(3000);