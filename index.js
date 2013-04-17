// dependencies
var net = require("net"),
readline = require("readline");

/**
 * @class Client
 * @param host {String} the host
 * @param post {Integer} the port
 */
function Client(host, port){
    this.host = host;
    this.port = port;
}

/**
 * @method start
 * start the client
 */
Client.prototype.start = function(){
  // create readline interface
    var rl = readline.createInterface(process.stdin, process.stdout);
    
    var self = this;
    
    // create TCP client
    var client = net.connect({host: this.host, port: this.port}, function(){
          // write out connection details
        console.log("Connected to %s:%d\n", self.host, self.port);
        
        rl.on("line", function(d){
            // send data to through the client to the host
            client.write(d.trim()+"\n");
        });
        
        client.on("data", function(d){
            // pause to prevent more data from coming in
            process.stdin.pause();
            
            // write out the data
            process.stdout.write(d.toString());
            process.stdin.resume();
        });
        
        client.on("close", function(){
            // stop input
            process.stdin.pause();
            
            // end readline
            process.stdout.write("\nconnection closed by foreign host.\n");
            rl.close();
            process.exit(0);
        });
        
        rl.on("SIGINT", function(){
            
            // stop input
            process.stdin.pause();
            process.stdout.write("\nending session\n");
            rl.close();
            
            // close connection
            client.end();
            process.exit(0);
        });   
    });
};

/**
 * @function createClient
 * creates a new client
 */
exports.createClient = function(host, port){
    return new Client(host, port);
};