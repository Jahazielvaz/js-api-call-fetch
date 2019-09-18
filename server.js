let http = require('http');
let greetings = require('./greetings');

let onRequest = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text-plain'});
  res.write('Imagine Tech is The Future');
  res.end();

  console.log('Server Running on Port 3000');
}

http.createServer(onRequest).listen(3000);
