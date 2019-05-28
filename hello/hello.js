const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    // response.setHeader() allows you only to set a singular header.
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.setHeader("Set-Cookie", "type=ninja");

    // response.writeHead() will allow you to set pretty much everything about the response head including status code, content, and multiple headers.
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Set-Cookie": "type=ninja"
    });

    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;

    res.write('Hello world!\n');
    res.write(txt);
    res.end();
});

server.listen(port, hostname, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});