/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var Stockfetch = require('./stockfetch');

var onError = function(error) { console.log(error); };

var display = function(prices, errors) {
  var print = function(data) { console.log(data[0] + '\t' + data[1]); };
  
  console.log("Prices for ticker symbols:");
  prices.forEach(print);
  
  console.log("Ticker symbols with error:");
  errors.forEach(print);
};

new Stockfetch().getPriceForTickers('mixedTickers.txt', display, onError);