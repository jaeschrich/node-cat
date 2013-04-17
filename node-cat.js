#!/usr/bin/env node
var program = require("commander"),
    nodeCat = require("./index");

// set program name
program.name = "node-cat";

program
.version("0.1.2")
.usage("<host> <port>")
.parse(process.argv);

if (process.argv.length < 2){
    console.log("see node-cat -h")
    process.exit(0);
}

else {
    var client = nodeCat.createClient(program.args[0], parseInt(program.args[1]));
    client.start();
}