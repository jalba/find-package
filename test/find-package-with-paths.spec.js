var findPackage = require('../index');
var packageJSON = require('../package.json');
var expect = require('chai').expect;
var path = require('path');

describe('A test suite for the find-package module', function() {
  before(function(){
    this.packageFound = findPackage(true);
  });

  it('should have the same properties as the package.json', function() {
    expect(this.packageFound.name).to.equal(packageJSON.name);
    expect(this.packageFound.version).to.equal(packageJSON.version);
    expect(packageJSON).to.deep.equal(this.packageFound);
  });

  it('should have the paths property', function() {
    var absolutePath = this.packageFound.paths.absolute;
    var actualPath = process.cwd().substring(0, process.cwd().length -4) + 'package.json';
    var actualAbsolutePath = process.cwd().substring(0, -4);
    expect(this.packageFound).to.have.property('paths');
    expect(this.packageFound.paths.relative).to.equal(path.relative(process.cwd(), absolutePath));
    expect(absolutePath).to.equal(actualPath);
  });
});
