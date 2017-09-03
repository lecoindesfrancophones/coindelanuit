var colors  = require('colors/safe');
var express = require('express');

var app 	= express();
app.listen(8080);

console.log(colors.green('Server running'));
console.log(process.env);
console.log(process.env.mysql_SERVICE_HOST);
console.log(process.env.DATABASE_USER);
console.log(process.mysql_SERVICE_HOST);