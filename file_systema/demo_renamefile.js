const fs = require('fs');

fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});