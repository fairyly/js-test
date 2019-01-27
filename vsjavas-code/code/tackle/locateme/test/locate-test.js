/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
/*
describe('locate test', function() {
  it('should register handlers with getCurrentPosition', function(done) {

    var original = navigator.geolocation.getCurrentPosition;
    
    navigator.geolocation.getCurrentPosition = function(success, error) {
      expect(success).to.be.eql(onSuccess);
      expect(error).to.be.eql(onError);
      done();
    }
   
   locate();
   navigator.geolocation.getCurrentPosition = original;
  });
});
*/
           
describe('locate test', function() {
 it('should register handlers with getCurrentPosition', function() {    
   var getCurrentPositionMock =       
     sandbox.mock(navigator.geolocation)
            .expects('getCurrentPosition')
            .withArgs(onSuccess, onError);
 
 
  locate();
 
  getCurrentPositionMock.verify(); 
 });
});
