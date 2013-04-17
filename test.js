var net = require("net"),
    nodeCat = require("./index.js");
    
// create TCP server
var server = net.createServer(function(s){
    s.pipe(s);    
});

// listen at $IP:$PORT
server.listen(process.env.PORT, process.env.IP); // you can change this

console.log('testing it\n');

var client = nodeCat.createClient(process.env.IP, process.env.PORT); // you can change this
client.start();