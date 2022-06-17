const queryResultEntity = require('../util/queryResult');
const commandResultEntity = require('../util/commandResult');
const eErrorCode = require('../util/eErrorCode');

function getQueryResult(res, queryResult){
    if (!queryResult)
        return res.status(400).send(new queryResultEntity.queryResult(null, eErrorCode.invalidParameters, 'Ocorreu um erro na leitura do resultado da consulta.'));

    switch (queryResult.errorCode) {
        case 0: 
            res.status(200);
            break;
        case 1: 
            res.status(404);
            break;
        case 2: 
            res.status(400);
            break;
        case 3: 
            res.status(404);
            break;
        case 4: 
            res.status(401);
            break;
        case 5: 
            res.status(401);
            break;
        default: 
            res.status(400);
            break;
    }
    if (queryResult.data?.length  == 1) 
        queryResult.data = queryResult.data[0];
    return res.send(queryResult);
}

function getCommandResult(res, commandResult){
    if (!commandResult)
        return res.status(400).send(new commandResultEntity.commandResult(0, eErrorCode.invalidParameters, 'Ocorreu um erro na leitura do resultado da consulta.'));

    switch (commandResult.errorCode) {
        case 0: 
            res.status(200);
            break;
        case 1: 
            res.status(404);
            break;
        case 2: 
            res.status(400);
            break;
        case 3: 
            res.status(404);
            break;
        case 4: 
            res.status(401);
            break;
        case 5: 
            res.status(401);
            break;
        default: 
            res.status(400);
            break;
    }
    return res.send(commandResult);
}

module.exports = { getQueryResult, getCommandResult };