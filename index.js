var http = require('http'),
     url = require('url');
var LED = require("./src/LEDswitch");

var proxy = http.createServer(function(request, response) {
        var path = url.parse(request.url).pathname;
        console.log(path); 
        LED.switch(path); 
        response.writeHead(200, {"Content-Type": "text/plain",'Access-Control-Allow-Origin' : '*'});
        response.end("success");
}).listen(8001);

proxy.on("abort",function() {
        LED.onabort()
});

console.log("server initialized");


