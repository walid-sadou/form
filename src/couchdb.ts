var nano = require('nano')('http://localhost:5984');
declare var require: any;

interface CouchdbConf {
    user: string;
    password: string;
    dbname: string;
}
let conf: CouchdbConf;
conf.user = 'user';
conf.password = 'password';
conf.dbname = 'testAuth';

nano.auth('testuser', 'testPass', (err, body, headers) =>{
    if(!err){
        nano.db.create('testAuth', (err, body) => {
            if(!err) {
                console.log('DB Created');
            }
        });
    }
});