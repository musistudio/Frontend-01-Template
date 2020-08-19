var express = require('express');
var router = express.Router();
const fs = require('fs');
const unzip = require('unzipper');

router.post('/', function (req, res, next) {
  let { filename } = req.query;
  let writeStream = unzip.Extract({path: '../server/public'});
  req.pipe(writeStream);
  req.on('end', () => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('okay');
  })
});

module.exports = router;
