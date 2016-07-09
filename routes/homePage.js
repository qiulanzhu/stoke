var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('首页');
});

router.get('/about', function(req, res) {
    res.send('关于');
});

module.exports = router;