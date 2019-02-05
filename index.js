// index.js
const serverless = require('serverless-http');
const express = require('express')
const app = express()

// process.env.AWS_ACCESS_KEY_ID = 'AKIAJ5SKZZTOCJOFUB3A'
// process.env.AWS_SECRET_ACCESS_KEY = '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'

app.get('/', function (req, res) {

  res.send('Hello World!')

})


module.exports.handler = serverless(app);