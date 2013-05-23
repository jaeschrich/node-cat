var net = require("net"),
    nodeCat = require("./index.js"),
    PORT = process.env.PORT || 8080,
    IP = process.env.IP || "localhost";
    
// create TCP server
var server = net.createServer(function(s){
    s.pipe(s);
    s.on("end", function(){
    	console.log("Server disconnected")
    })
});

// listen at IP:PORT
server.listen(PORT); // you can change this

console.log('testing it\n');

var client = nodeCat.createClient(IP, PORT); // you can change this
client.start(function(client, rl, stdin, stdout){
	stdout.write("Sent status\n")
	client.write("STATUS: None of your buisness\n");
});
