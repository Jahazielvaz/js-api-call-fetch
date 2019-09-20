let http = require('http'),
server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Success');
  console.log(`Request was made from url ${req.url}`);
});

console.log('Server running on port 3000');
console.log('Our local IP address is 192.168.1.84')
server.listen(3000, '192.168.1.84');
