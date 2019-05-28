const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3025;

const server = http.createServer((req, res) => {
    // response.setHeader() allows you only to set a singular header.
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.setHeader("Set-Cookie", "type=ninja");

    // response.writeHead() will allow you to set pretty much everything about the response head including status code, content, and multiple headers.
    fs.readFile('demofile1.html', function (err, data) {
        if (err) {
            res.writeHead(200, {
                "Content-Type": "text/plain",
                "Set-Cookie": "type=ninja"
            });
            res.write('something bad happened');
        }
        /*
        if (data.length != 0) {
            fs.appendFile('demofile1.html', '<h2 class="text-center"> This is additional Text</h2>', function (err) {
                if (err) throw err;
                console.log('Error append file! ' + err);
            });
        }
        */
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Set-Cookie": "type=ninja"
        });
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});