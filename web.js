var express = require('express');
var fs  = require('fs');
var buf = new Buffer(256);

var app = express.createServer(express.logger());

var bufLen = buf.write(fs.readFileSync("index.html",'UTF8'));

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, bufLen));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});