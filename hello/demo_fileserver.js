const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3025;

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        res.writeHead(200, {
            "Content-Type": "text/html",
            "Set-Cookie": "type=ninja"
        });

        res.write(data);
        return res.end();
    });
});

server.listen(port, hostname, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});