var express = require('express');
var router = express.Router();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get('/', function (req, res){
	res.sendFile(__dirname + '/public/index.html');
});

var twitterController = require('./twitterController');

router.post('/tweets', twitterController.getTimeline);

module.exports = router;