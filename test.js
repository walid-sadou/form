'use strict';
var chai = require("chai");
var should = chai.should();
var nano = require('nano')('http://localhost:5984' );
var testdb = nano.use('testdb');

describe('couchdbtest', function() {
   it('should find good db', function (done) {
       nano.db.get('testdb', function (err, body) {
           should.equal(body.db_name,'testdb');
           done();
       })
    });
   it('should find good doc', function(done) {
       testdb.get('myid', function(err, body) {
          should.equal(body._id,'myid');
           done();
       });
   })
});