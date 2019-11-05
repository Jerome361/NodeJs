//how to create a server that sends data to the browser
//require the package called express that will help us display contents in the browser
//require is a key word used to include a package into our code
const express = require("express");
const app = express();

//express has a method called listen that has arguments; the port number and a call back(the ftn written inside a ftn)
app.listen(3000, function(){
    console.log('listening on 3000')
}
)

//The browser sends a get request to the server to read from the server using a get method.
// app.get(path,callback)
// The path is indicated by a / after the domain name.

//a call back has two args, the request and a response

app.get('/', function(req, res){
    res.send('Hello World')
})
