var request = require('superagent');


var url = 'http://api.dirble.com/v2/stations?token=d66903cc08abf0e06eb48215e0	';

request
.get(url)
.end(function(err, res){
// .set('d66903cc08abf0e06eb48215e0	', 'foobar')
  if (err) return
  console.log(res.body[11].streams)
});
