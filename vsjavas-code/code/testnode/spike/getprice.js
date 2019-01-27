/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
//A quick and dirty prototype
var http = require('http');

var getPriceTrial = function(ticker) {
  http.get('http://ichart.finance.yahoo.com/table.csv?s=' + ticker, 
    function(response) {
    if(response.statusCode === 200) {
      var data = '';
      var getChunk = function(chunk) { data += chunk; };
      response.on('data', getChunk);
      response.on('end', function() {
        console.log('received data for ' + ticker);
        console.log(data);
      });      
    } else {
      console.log(ticker + ' - error getting data : ' + response.statusCode);
    }
  }).on('error', function(err) {
    console.log(ticker + ' - error getting data : ' + err.code);
  });
};

getPriceTrial('GOOG');
getPriceTrial('INVALID');
//Also try running after disconnecting from the network