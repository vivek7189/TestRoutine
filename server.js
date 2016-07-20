/**
 * Created by vivek.kumar1 on 6/1/16.
 */

 var express = require('express');
 var streamBuffers = require('stream-buffers');
 var app = express();
 var crawler = require('js-crawler');
 app.use('/',express.static('./'));
 app.use('/boot', express.static(__dirname + '/node_modules/bootstrap/dist/'));
// now start the server

var server = app.listen(8000,function (){
     console.log('Listening on port :',server.address().port);
})
var data='';
new crawler().configure({depth: 2})
  .crawl("http://google.com", function onSuccess(page) {
        data = new Buffer(page.content,'utf8'); // <Buffer 68 65 6c 6c 6f>
         //data.push(page.content)
  });
app.get('/api/users', function(req, res) {
    res.type('.html');  
  res.send(data);
});

