const dynamodb = require('dynamodb');
const aws  = require('aws-sdk');
require('dotenv').config();

console.log(process.env.QUERY_AWS_ACCESS_KEY_ID);

dynamodb.AWS.config.update({
    accessKeyId: process.env.QUERY_AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.QUERY_AWS_SECRET_ACCESS_KEY, 
    region: process.env.QUERY_AWS_REGION
});

const dbContext = new aws.DynamoDB.DocumentClient();

module.exports = { dbContext }