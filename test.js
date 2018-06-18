'use strict';
var chai = require("chai");
var should = chai.should();
var nano = require('nano')('http://localhost:5984' );
var testdb = nano.use('testdb');

describe('couchdbtest', function() {
   it('should find database', function(done) {
       nano.db.get('testdb', function (err, body) {
           should.equal(body.db_name, 'testdb');
           done;
       })
   });
   it('should find good doc', function() {
       testdb.get('{ ok: true,\n' +
           '  id: \'myid\',\n' +
           '  rev: \'1-6e4cb465d49c0368ac3946506d26335d\' }', function(err, body) {
           should.equal(body, 'myid');
           done;
       });
   })
});