//import http module
const http = require('http');

//assign port
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});
