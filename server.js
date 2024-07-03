const http = require('http');

const server = http.createServer((req, res) => {
    const url = require('url');

    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
    
      if (parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body>Hello from the root route!</body></html>');
      } else if (parsedUrl.pathname === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Hello from the API route!' }));
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
      }
    });
});

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});