const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
var archiver = require('archiver');

let packname = './package';

const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=' + 'pakage.zip',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream'
    }
}
const req = http.request(options);

var archive = archiver('zip', {
    zlib: { level: 9 }
});
archive.directory(packname, false);
archive.pipe(req);
archive.on('end', () => {
    req.end();
})
archive.finalize();




