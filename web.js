var express = require('express');

//var buf = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html'), 'utf-8');
//var teste = buf.toString();
var teste2 = 'lalala';

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(teste2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

});
