'use strict';

var chai = require("chai");
var should = chai.should();
var nano = require('nano')('http://localhost:5984' );
var testdb = nano.use('testdb');

describe('couchdbtest', function() {
   it('should find database', function(done) {
       nano.db.get('testdb', function (err, body) {
           should.equal(body, 'testdb');
       })
   });
   it('should find good doc', function() {
       testdb.get('myid', function(err, body) {
           should.equal(body, 'myid');
       });
   })
});