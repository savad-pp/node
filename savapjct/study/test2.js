var http = require('http');
var url = require('url');
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!'); //write a response to the client
//   res.write(req.url);
//   res.end(); //end the response


var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(req.url);
  //res.write(q);
  res.end(txt);
}).listen(8080); //the server object listens on port 8080 