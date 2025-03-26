//simple http proxy (written by github copilot)
const http = require('http');
const url = require('url');

const proxy = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || 80,
    path: parsedUrl.path,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });

  proxyReq.on('error', (err) => {
    res.writeHead(500);
    res.end(`Proxy error: ${err.message}`);
  });
});

const PORT = 3000;
proxy.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});