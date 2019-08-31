const http = require("http");
let additional = require("./modules/Addition.js");

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 
        'Content-Type': 'text/html',
        "Set-Cookie": "type=ninja"
    });
    res.write(req.url + "<br>");
    res.write("The additional number are currently: " + additional.AddNumber(10, 13) + "<br>");
    res.write("The additional Date are currently: " + additional.myDateTime());
    res.end();
});

server.listen(port, hostname, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    // Console will print the message
    console.log('Server running at http://' + hostname + ':'+ port +'/');
});