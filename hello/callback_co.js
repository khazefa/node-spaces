var csv = function() {
    this.csvFileToArray = function (fileName, delimiter) {
        console.log("Get File");
        var fs = require('fs');
        var data = fs.readFileSync(fileName, 'utf8');
        var returnedData = doSomething(null, data, delimiter);
        console.log(returnedData);
    }
};

function doSomething(err, data, delimiter) {
    console.log("Parse File");
    if (err) {
        throw err;
    } else {
        var csvLineArray = data.split("\n");
        var csvArray = [];
        csvArray['header'] = csvLineArray[0].split(delimiter);
        csvArray['data'] = [];
        for (var i = 1; i < csvLineArray.length; i++) {
            csvArray['data'].push(csvLineArray[i].split(delimiter));
        }
        return csvArray;
    }
}

var csvHandler = new csv();

console.log("Program Start");
var test = csvHandler.csvFileToArray('spaj_001.csv', '|');
console.log(test);