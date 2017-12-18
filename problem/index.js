/* eslint-disable no-console */
const http = require('http');
const sleep = require('sleep');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  sleep.sleep(5); // ARTIFICIAL CPU INTENSIVE
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
