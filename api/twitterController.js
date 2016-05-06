var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'HoaLEJX66CUZJb3skPd39wgL2',
  consumer_secret: '38kaEN96UmaRG30mIn3EvLgx0NaK2viyv2eJ4l7MpAj8oqJgjI',
  access_token_key: '3262596740-JdwC4xCV7oXBvkPlxC4SSubpnSBI472Zfu4LZwb',
  access_token_secret: 'nZplw9SlfH3LZEYKcoBCUq6XEJexfRyh0HFUra3mSHhz2'
  
});

module.exports = {
    getTimeline : function (req, res){
    client.get('statuses/user_timeline', {screen_name: req.body.data, count: 15}, function(error, data, response){
     if (!error) {
       console.log(data);
     }
     console.log("RESPONSE: " + JSON.stringify(response));
     console.log(JSON.stringify(data));
      res.json(data);
     });
  }
};