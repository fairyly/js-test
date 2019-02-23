var fs = require('fs');

var StockFetch = function() {
  this.readTickersFile = function(fileName,onError) {
    var that = this;

    var processResponse = function(err, data) {
      if (err) {
        onError('error reading file:'+ fileName);
      }else {
        var tickers = that.parseTickers(data.toString());
        if (!tickers.length) {
          onError('file:'+ fileName + ' has invalid content');
        }else {
          that.processTickers(tickers);
        }
      }
    };
    fs.readFile(fileName, processResponse);
  };

  this.parseTickers = function() {};
  this.processTickers = function() {};
};

module.exports = StockFetch;
