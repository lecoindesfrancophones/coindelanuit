var colors  = require('colors/safe');
var express = require('express');

var app 	= express();
app.listen(8080);

console.log(colors.green('Server running'));