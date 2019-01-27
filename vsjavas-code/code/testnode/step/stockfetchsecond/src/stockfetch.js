/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var fs = require('fs');

var Stockfetch = function() {
  this.readTickersFile = function(filename, onError) {
    var self = this;
    
    var processResponse = function(err, data) {
      if(err)
        onError('Error reading file: ' + filename);
      else {
        var tickers = self.parseTickers(data.toString());
        self.processTickers(tickers);
      }
    };
    
    fs.readFile(filename, processResponse);
  };
  
  this.parseTickers = function() {};
  this.processTickers = function() {};
};

module.exports = Stockfetch;