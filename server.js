var colors  = require('colors/safe');
var express = require('express');

var app 	= express();
app.listen(8080);

console.log(colors.green('Server running'));
console.log(process.env);
console.log('mp: '+process.env.MYSQL_PORT);
console.log('msp: '+process.env.MYSQL_SERVICE_PORT);
console.log('msh: '+process.env.MYSQL_SERVICE_HOST);
