const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Service B! Version: v1\n');
});

server.listen(port, () => {
    console.log(`Service B running on port ${port}`);
});
