var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Kainan Rodrigues'.bold().fontsize(50));
});

module.exports = router;
