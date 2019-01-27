/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
describe('onSuccess test', function() {
 it('should call createURL with latitude and longitude', function() {
   var createURLSpy = sandbox.spy(window, 'createURL');

   var position = { coords: { latitude: 40.41, longitude: -105.55 }};

   onSuccess(position);
                                   
   expect(createURLSpy).to.have.been.calledWith(40.41, -105.55);
 });        

 it('should call setLocation with URL returned by createURL', function() {
  var url = 'http://www.example.com';

  sandbox.stub(window, 'createURL')
         .returns(url);

  var setLocationSpy = sandbox.spy(window, 'setLocation');

  var position = { coords: { latitude: 40.41, longitude: -105.55 }};
  onSuccess(position);

  expect(setLocationSpy).to.have.been.calledWith(window, url);
 });
});
