var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/convert', function(req, res, next){
    var currency = req.query.currency;
    var fromCurrency = req.query.from_currency;
    var toCurrency = req.query.to_currency;
    var converted = currency / exchangeRates[fromCurrency] * exchangeRates[toCurrency];
    res.render('results', {
        currency: currency,
        toCurrency: toCurrency,
        converted: converted}
    );
});
/*get about page*/
router.get('/about', function(req, res, next){
  res.render('about', {name: "my awesome site"});
});

module.exports = router;
