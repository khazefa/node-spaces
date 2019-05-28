var http = require("http");
var additional = require("./modules/Addition.js");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url + "<br>");
    res.write("The additional number are currently: " + additional.AddNumber(10, 13) + "<br>");
    res.write("The additional Date are currently: " + additional.myDateTime());
    res.end();
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');