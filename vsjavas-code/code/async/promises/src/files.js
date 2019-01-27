/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var fs = require('fs-promise');

module.exports = function(fileName) {
  var onSuccess = function(data) {
    return Promise.resolve(data.toString().split('\n').length);
  };
  
  var onError = function(err) {
    return Promise.reject(new Error('unable to open file ' + fileName));
  };
  
  return fs.readFile(fileName)
           .then(onSuccess) 
           .catch(onError); 
};