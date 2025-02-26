const queriesDbContext = require('../queriesDbContext');
const queryResult = require('../../util/queryResult');
const eErrorCode = require('../../util/eErrorCode');

class listUsers {
    constructor() { }

    getError(){
        return null;
    }
    
    async execute(){
        var params = {
            TableName: "users"
        };

        var result;
        await queriesDbContext.dbContext.scan(params, function(err, data) {
            if (err) {
                console.log(err);
                result = new queryResult.queryResult(0, eErrorCode.invalidParameters, 'Ocorreu um erro na excução da consulta.');
            }
            else 
                result = new queryResult.queryResult(data.Items);
        }).promise();
        return result;
    }
}

module.exports = { listUsers };