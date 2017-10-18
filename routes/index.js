var express = require('express');
var router = express.Router();
var conversionRates = require('../model/currencyDB');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/convert', function(req, res, next){
    var currency = req.query.currency;
    var fromCurrency = req.query.from_currency;
    var toCurrency = req.query.to_currency;

    conversionRates( function(err, convertData) {
        // figure out math
        if (err) {
            return res.render('error' + err);
        } else {
            var converted = currency / convertData[fromCurrency] * convertData[toCurrency];
            return res.render('results', {
                currency: currency,
                toCurrency: toCurrency,
                converted: converted}
            );
        }
    });
});
/*get about page*/
router.get('/about', function(req, res, next){
  res.render('about', {name: "my awesome site"});
});

module.exports = router;
