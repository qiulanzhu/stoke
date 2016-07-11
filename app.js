global.logger = require('./logService');
var  http = require('http');
var express = require('express');
var app = express();
var homePage = require('./routes/homePage');
var iconv = require('iconv-lite');
var processData = require('./module/processData');
var nodeEmail = require('./module/email');

var stockId = 'sh600039,' +
    'sz000652,' +
    'sh600382,' +
    'sh600805,' +
    'sh600548,' +
    'sh600117,' +
    'sh600823,' +
    'sh600104,' +
    'sh600507,' +
    'sz000690,' +
    'sz002344,' +
    'sh601633';
var url = 'http://hq.sinajs.cn/list=' + stockId;
http.get(url, function(res) {
    var data = '';
    res.on('data', function(chunk){
        count++;
        data += iconv.decode(chunk, 'GBK');
    });
    res.on('end', function(){
        processData.filterStokeData(data, function (err, result) {
            logger.ndump('filterStokeData', result);
        });
    });
}).on('error', function(e) {
    logger.error("Got error: " + e.message);
});

app.use('/', homePage);
app.listen(3000);