describe('async-local test ',function(){

  it('should pass this test',function(){
    expect(true).to.eql(true);
  });

  it('should get lat and long from ',function(done){
    let onSuccess = function(local){
      expect(local).to.have.prototype('lat');
      expect(local).to.have.prototype('lon');
      console.log(local)
      done();
    }

    let onError = function(err){
      throw 'not expected';
    }

    this.timeout(10000);

    fetchLocal(onSuccess, onError);
  });
});
