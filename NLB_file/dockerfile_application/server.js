const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
app.use(bodyParser.json());
const dynamodb = new AWS.DynamoDB.DocumentClient({region : "<DynamoDB_Region>"});

app.get('/ui', (req, res, callback) => { 
    const promise = new Promise(function(resolve, reject) {         
        var params = {
            TableName: "<DynamoDB_Name>",
            KeyConditionExpression : 'ID = :i',
            ExpressionAttributeValues : {
                ':i': req.body.id
            }
        };
        dynamodb.query(params, (err, data) => { 
            if (err) {
                console.log("ERROR", err);
                res.send({
                    statusCode: '500',
                    body: err
                });
            } else {
                console.log("Success!");
                res.send(data.Items);
            }
        }); 
    });  
    return promise;          
});

app.get('/', (req,res) => {
    res.send({
        'statusCode': '200',
        'Content-Type': 'application/json',
        'body': 'GOOD'
    });
});

app.post('/ui', (req, res, callback) => {
    const promise = new Promise(function(resolve, reject) {    
        var _id = req.body.id
        var _pw = req.body.passwd 
        var params = {
            Item: 
            {
                "ID": _id,
                "Password":_pw
            },             
            TableName: "<DynamoDB_Name>"
        };    
        var bodyre = req.body.id
        var bd = `POST complete ID is ${bodyre}`;
        dynamodb.put(params, function(err) {
            if (err) {
                console.log("ERROR", err);
                res.send({
                    statusCode: '500',
                    body: err
                });
            } else {
                console.log("Success!");
                res.send({
                    statusCode: '200',
                    body: bd
                });
            }
        });
    }); 
    return promise;       
});

app.listen(8080, (req,res) => {
    console.log("SERVER ON!")
});
