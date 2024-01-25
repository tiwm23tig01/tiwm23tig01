/*
 * Install nodejs
 * > npm i
 * > node server.js
*/

var express = require("express"),
  fs = require("fs"),
  url = require("url");
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use("/", express.static(__dirname + "/"));
app.use(express.static(__dirname + "/"));

app.post("/formdata", function (request, respond) {
  var body = "";
  filePath = __dirname + "/formdata/emailList.txt";
  body =
    "NEW MESSAGE FROM " +
    request.body.user_name +
    ", " +
    request.body.user_mail +
    ", " +
    request.body.user_message +
    "\r\n";
  fs.appendFile(filePath, body, function () {
    respond.end(
      '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>Form Example</title><script type="text/javascript">alert("message added");window.location.replace("../");</script></head><body></body></html>'
    );
  });
});

// Running Server Details.
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at %s:%s Port", host, port);
});
