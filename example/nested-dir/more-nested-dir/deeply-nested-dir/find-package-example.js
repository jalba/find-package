var findPackage = require('find-package');
var configurationObj = findPackage(true);
console.log(configurationObj.name);
console.log(configurationObj.paths);
console.log(process.cwd());
