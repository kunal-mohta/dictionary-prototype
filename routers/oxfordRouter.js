var express = require('express');
var app = require('../app.js');

var bodyParser = require('body-parser');

var oxfordRouter = express.Router();
oxfordRouter.use(bodyParser.urlencoded({ extended: true }));

oxfordRouter.get('/definition/:word', function(request,response){
    var makingRequest = require('request');//request npm package used to make requests to the online APIs
    
    var word = request.params.word;//the API already supports uppercase letters so no need to convert to lowercase

    makingRequest({url:'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/'+word, headers:{'app_id':'bbbf37f3','app_key':'a6c826c2d4f3f3b422979c0506a1f1b8'}}, function(err, res, body){
        var jsonResponse = {};
        if(err){
            jsonResponse = {
                statusCode: 500,
                responseMessage: "Some error occured, please try contacting the service provider.",
                jsonDefinitions: [],
            }
        } 
        else if(res.statusCode == 404){
            jsonResponse = {
                statusCode: 404,
                responseMessage: "Unknown word",
                jsonDefinitions: [],
            }
        }
        else{
            var scrapedDef = JSON.parse(body).results[0].lexicalEntries[0].entries[0].senses;
            var defArray = [];
            for(i=0;i<scrapedDef.length;i++){
                defArray[i] = {
                    definitions: scrapedDef[i].definitions,
                    examples: []
                }
                
                if(scrapedDef[i].examples){
                    for(j=0;j<scrapedDef[i].examples.length;j++) defArray[i].examples[j] = scrapedDef[i].examples[j].text;
                }
            }
            
            jsonResponse = {
                statusCode: 200,
                responseMessage: "Word Found",
                jsonDefinitions: defArray
            }
        }
        response.status(jsonResponse.statusCode).send(jsonResponse);
    });
    
});

module.exports = oxfordRouter;