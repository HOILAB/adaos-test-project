const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/health') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString()
    }));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});