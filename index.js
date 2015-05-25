var parents = require('parents');
var fs = require('fs');
var path = require('path');

function findPath() {
  var parentsArr = parents(process.cwd());
  var i;
  for(i = 0; i < parentsArr.length; i++) {
    var config = parentsArr[i] + '/package.json';
    try {
      if(fs.lstatSync(config).isFile()) {
        return config;
      }
    }catch(e) {}
  }
  return null;
}

module.exports = function(addPaths) {
  var pathToConfig = findPath();
  var configJSON = null;
  if(pathToConfig !== null) configJSON = require(pathToConfig);
  if(configJSON && addPaths) {
    configJSON['paths'] = {
      'relative': path.relative(process.cwd(), pathToConfig),
      'absolute': pathToConfig
    };
  }
  return configJSON;
};
