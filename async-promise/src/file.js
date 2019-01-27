let fs = require('fs-promise');

let linesCount = function(fileName){
  let onSuccess = function(data){
   return Promise.resolve(data.toString().split('\n').length);
  };

  let onError = function(err){
    return Promise.reject(new Error('unable to open file ' + fileName));
  }

  return fs.readFile(fileName)
            .then(onSuccess)
            .catch(onError);
}

module.exports = linesCount;
