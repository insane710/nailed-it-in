var util = require('util'),  
    http = require('http');

http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.\nwhat do you know?');
  res.end();
}).listen(8000);

/* server started */  
util.puts('> hello world running on port 8000');
