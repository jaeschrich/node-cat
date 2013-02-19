#node-cat: netcat clone written with node.js
A netcat clone written to replace the built-in Windows telnet client. The nodejs TCP echo server example didn't work right because telnet sent each character. ```node-cat``` sends the text by line.
##Usage
```
$ node-cat <host> <port>
```

##Example
Using the nodejs TCP echo server example.

```
$ node-cat localhost 8080
Hello World!
Hello World!

^C
ending session
$
```
