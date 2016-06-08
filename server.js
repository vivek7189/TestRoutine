/**
 * Created by vivek.kumar1 on 6/1/16.
 */

 var express = require('express');
 var app = express();
 app.use('/',express.static('./'));
 app.use('/boot', express.static(__dirname + '/node_modules/bootstrap/dist/'));
// now start the server

var server = app.listen(8000,function (){
    console.log('Listening on port :',server.address().port);
})