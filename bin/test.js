#! /app/bin/node
var http = require('http');

var options = {
  hostname: 'hidden-sierra-45927.herokuapp.com',
  port: '80',
  path: '/monitoring',
  method: 'GET'
};

var data = null;

var req = http.request(options, function(res){
  data = null;
  res.on('data', function(chunk){
    data += chunk;
  });
  
  res.on('end', function(){
    console.log('get response');
  });
});

req.on('error', function(e){
  console.log('problem with request' + e.message);
});

req.write('data\n');
req.end();