const fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Hello content!', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});