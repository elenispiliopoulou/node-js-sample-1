var express = require('express'),
  fs = require('fs');
var app = express.createServer(express.logger());
var content;

fs.readFile('index.html', function (err,data) {
  if (err) {
      throw err;
   }
   content = data;
});

app.get('/', function(request, response) {
//  response.send('Hello World!');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
