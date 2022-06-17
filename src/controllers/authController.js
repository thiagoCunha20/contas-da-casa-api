const express = require('express');
const router = express.Router();
const controllerBase = require('../util/controllerBase');
const queryResult = require('../util/queryResult');
const commandResult = require('../util/commandResult');
const eErrorCode = require('../util/eErrorCode');

router.get('/', async (req, res) => {
    var dataResult = [
        {
            id: 1
        },
        {
            id: 1
        }
    ];

    var test = new queryResult.queryResult(dataResult, eErrorCode.notFound, 'O arquivo desejado não foi encontrado') ;
    return controllerBase.getQueryResult(res, test);
});

router.get('/', async (req, res) => {
    var dataResult = [
        {
            id: 1
        },
        {
            id: 1
        }
    ];

    var test = new queryResult.queryResult(dataResult, eErrorCode.notFound, 'O arquivo desejado não foi encontrado') ;
    return controllerBase.getQueryResult(res, test);
});

router.post('/', async (req, res) => {
    var test = new commandResult.commandResult(0, eErrorCode.invalidParameters, 'Teste de erro') ;
    return controllerBase.getCommandResult(res, test);
});

module.exports = app => app.use('/auth', router);