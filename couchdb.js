var nano = require('nano')('http://localhost:5984' );
var testdb = nano.use('testdb2')

nano.db.create('testdb', function(err, body) {
    if (!err) {
        console.log('database test created!');
    }
});


testdb.insert({ _id: 'myid', crazy: true }, function(err, body) {
    if (!err)
        console.log(body)
})