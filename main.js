/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Dateizugriff und URL Modul
//wir haben 2 html Dateien mit unterschiedlichem Inhalt, der jeweils 
//ausgelesen wird und je nach URL Eingabe vom server angezeigt wird 
var http = require('http');
var url = require('url');
var fs = require('fs');
let tatsache;

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);