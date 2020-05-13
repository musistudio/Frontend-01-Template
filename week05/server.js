const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.writeHead(200, { 'Transfer-Encoding': 'chunked' });
    res.end('ok');
})


server.listen(8888);