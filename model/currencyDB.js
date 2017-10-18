var request = require('request');


var baseURL = 'http://api.fixer.io/latest?base=IDR'


function conversionRates( callbackFunction ) {

    request({uri: baseURL}, function (error, convertRateResponse, body) {
        if (!error && convertRateResponse.statusCode == 200) {
            console.log("Conversion Site Says \n" + JSON.stringify(body));
            var convertJSON = JSON.parse(body);
            callbackFunction(null);
        }
        else {
            console.log("Error in JSON request: " + error);
            console.log(convertRateResponse);
            console.log(body);
            callbackFunction(Error("Error fetching data from the Conversion service"));
        }
    });
}






module.exports = conversionRates;