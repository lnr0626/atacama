import express = require("express")

let app = express();
let port = 3000;

app.get('/', function(req, res) {
   res.send("Hello, world!");
});

app.listen(port, function() {
    console.log(`Atacama is now listening on port ${port}`)
});