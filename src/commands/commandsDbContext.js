const dynamodb = require('dynamodb');
const aws  = require('aws-sdk');

dynamodb.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION
});

const dbContext = new aws.DynamoDB.DocumentClient();

module.exports = { dbContext }