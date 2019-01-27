/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var app = require('./app');
var config = require('./config.json');

exports.config = {
  directConnect: true,

  baseUrl: 'http://localhost:' + (process.env.PORT || 3030),

  framework: 'mocha',
  
  mochaOpts: {
    reporter: 'dot',
    timeout: 10000,
  },

  specs: ['test/integration/*.js'],
};