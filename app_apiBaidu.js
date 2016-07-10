global.logger = require('./logService');
var express = require('express');
var superAgent = require('superagent');
var app = express();
var homePage = require('./routes/homePage');

var apiKey = '900b76dc238ae5bdbe9231bd46833959';
var stockid = 'sz002230';
var url = 'http://apis.baidu.com/apistore/stockservice/hkstock?stockid=' + stockid +' &list=1';

superAgent
    .get(url)
    .set('apikey', apiKey)
    .end(function (err, res) {
        if (err) {
            return next(err);
        }
        logger.ndump('res.text', JSON.parse(res.text));
    });

app.use('/', homePage);
app.listen(3000);