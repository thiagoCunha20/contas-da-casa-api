const queriesDbContext = require('../queriesDbContext');
const queryResult = require('../../util/queryResult');
const eErrorCode = require('../../util/eErrorCode');

class getUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
     }

    getError(){
        if (!this.id)
            return new queryResult.queryResult(0, eErrorCode.invalidParameters, 'Parámetro id não pode ser nulo ou vazio.');
        if (!this.name)
            return new queryResult.queryResult(0, eErrorCode.invalidParameters, 'Parámetro nome não pode ser nulo ou vazio.');
        return null;
    }
    
    async execute(){
        var params = {
            Key: { id: this.id, name: this.name },
            TableName: 'users'
        };

        var result;
        await queriesDbContext.dbContext.get(params, function(err, data) {
            if (err) {
                console.log(err);
                result = new queryResult.queryResult(null, eErrorCode.invalidParameters, 'Ocorreu um erro na excução da consulta.');
            }
            else 
                result = new queryResult.queryResult(data.Item);
        }).promise();
        return result;
    }
}

module.exports = { getUser };