var express = require('express');

var app = express();

var oxfordRouter = require('./routers/oxfordRouter.js');

app.use('/',oxfordRouter);

var port = 3000;
app.listen(port, function(e){
    if(e) console.log("Error occured in starting the server..");
    else console.log("Listening at "+port);
});
module.exports = app;