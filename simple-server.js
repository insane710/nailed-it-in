var util = require('util'),  
    http = require('http');
	fs = require('fs'),
    index;

fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(data);
  res.end();
}).listen(8000);

/* server started */  
util.puts('> hello world running on port 8000');
