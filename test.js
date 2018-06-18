'use strict';
var chai = require("chai");
var should = chai.should();
var nano = require('nano')('http://localhost:5984' );
var testdb = nano.use('testdb');

describe('couchdbtest', function() {
   it('should find good doc', function() {
       testdb.get('myid', function(err, body) {
           should.equal(body, '\'{ ok: true,\\n\' +\n' +
               '           \'  id: \\\'myid\\\',\\n\' +\n' +
               '           \'  rev: \\\'1-6e4cb465d49c0368ac3946506d26335d\\\' }\'');
           done();
       });
   })
});