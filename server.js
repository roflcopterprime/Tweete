// set up ======================================================================
var express = require('express');
var app = express(); 			
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./api/routes');

// Configuration ====================================================
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public')); 		
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(function (req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// Set-up Routing ==========================================
app.use( '/',routes);

// Listen to port 5000 (start app with node server.js) ===================

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
