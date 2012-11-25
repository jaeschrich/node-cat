#!/usr/bin/env node
var program = require("commander"),
net = require("net"),
readline = require("readline")

program.name = "node-cat"

program
.version("0.1.2")
.usage("<host> <port>")
.parse(process.argv)

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

var client = net.connect({host: program.args[0], port: program.args[1]})

rl.on("line", function(d){
	client.write(d+"\n")
})

client.on("data", function(d){
	process.stdin.pause()
	process.stdout.write(d)
	process.stdin.resume()
})

client.on("close", function(){
	process.stdin.pause()
	rl.write("\nconnection closed by foreign host.")
	rl.close()
	process.exit(0)
})

rl.on("SIGINT", function(){
	process.stdin.pause()
	rl.write("\nending session")
	rl.close()
	client.end()
	process.exit(0)
})

