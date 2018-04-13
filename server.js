
var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var server1 = http.createServer( function(request, response) {

	response.end("You are sooooooooooooo fucking cool!");
});

var server2 = http.createServer( function(request, response) {

	response.end("STOP being a dick!");
});

server1.listen(PORT1, function() {

		console.log("Server listen on: http://localhost: "+ PORT1);

});

server2.listen(PORT2, function() {

		console.log("Server listen on: http://localhost: "+ PORT2);

});