var express = require("express");
var app = express();

app.get('/api/whoami', function(req, res) {
    var object = {
        IPAddress: req.ip.split(':')[3],
        language: req.get("Accept-Language").split(',')[0],
        OS: req.get("User-Agent").split('(')[1].split(')')[0]
    };
   res.send(object); 
});

app.listen(process.env.PORT || 8080);