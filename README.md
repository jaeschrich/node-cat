#node-cat: netcat clone written with node.js
Basically, I wrote a netcat clone to replace the built-in (and not good) Windows telnet client. The nodejs TCP echo server example looked horrible because telnet sent each character. ```node-cat``` sends the text by line.
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
