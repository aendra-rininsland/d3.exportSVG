/**
 * d3.exportSVG test suite
 *
 * Note: This only works in NodeJS at the moment. @TODO make work in browser.
 */

if (typeof window === 'undefined') {
  var chai = require('chai');
  var d3 = require('d3');
  var jsdom = require('jsdom');
  // Yep, we've got QuerySelector turned on
  jsdom.defaultDocumentFeatures = {
    QuerySelector: true,
    GetComputedStyle: true
  };

  var fs = require('fs');
  var Q = require('q');
  it = require('mocha-qa').it
  require('../d3.exportSVG.js');

  var deferred = Q.defer();
  var mock = deferred.promise;
  var mockHTML = fs.readFileSync('test/fixtures/test_single.html', {encoding: 'utf-8'});
  
} else {
  
}

var expect = chai.expect;

describe('d3.svgExport()', function () { 
  beforeEach(function(){
    this.result = fixture.load('/test/fixtures/test_single.html');
  });
  
  afterEach(function(){
    fixture.cleanup()
  });
  
  var svg;
  
  describe('when not supplying a document object', function(){
    it('should return blobs if download is true', function(){
      svg = d3.exportSVG('test.svg', {download: true}); 
      expect(svg).to.have.length(2);
      expect(svg[0]).to.be.an.instanceOf(Blob);
      expect(svg[1]).to.be.an.instanceOf(Blob);
    });
    
    it('should work if download is false', function(){
      svg = d3.exportSVG('test.svg', {download: false});
      expect(svg).to.have.length(3);
      expect(svg[0]).to.be.an.instanceOf(Object);
      expect(svg[1]).to.be.an.instanceOf(Object);
    });
  });

  
  // it('should work if no input parameter is supplied', function(){
  // 
  // });
  // 
  
  // beforeEach(function(){
  //   jsdom.env(mockHTML, {}, function(err, dom){
  //     if (err) {
  //         deferred.reject(new Error(error));
  //     } else {
  //         deferred.resolve(dom);
  //     }
  //   });
  // });
  // 
  // 
  // 
  // it('returns an array if there is only one SVG object in the document', function () {
  //   return mock.then(function(window){
  //     var result = d3.exportSVG('mockup.svg', {download: false}, window);
  //     expect(dom).to.be.truthy();
  //   });
  // });
});
  
