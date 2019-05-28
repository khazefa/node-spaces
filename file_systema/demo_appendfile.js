const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
});