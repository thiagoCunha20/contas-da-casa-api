const router = require('express').Router();
const controllerBase = require('../util/controllerBase');
const queryResult = require('../util/queryResult');
const commandResult = require('../util/commandResult');
const eErrorCode = require('../util/eErrorCode');
const userEntity = require('../commands/users/entities/user');
const commandsDbContext = require('../commands/commandsDbContext');

router.get('/', async (req, res) => {
    var test = new queryResult.queryResult(null) ;
    controllerBase.getQueryResult(res, test);
});

router.post('/', async (req, res) => {
    const user = new userEntity.user(req.body.name);

    var result = new commandResult.commandResult(1);
    commandsDbContext.dbContext.put({ TableName: 'users', Item: user }, function(err, data) {
        if (err) 
            result = new commandResult.commandResult(0, eErrorCode.invalidParameters, 'Erro na inserção do usuário.');
        else 
            result = new commandResult.commandResult(1);
    });
   
    controllerBase.getCommandResult(res, result);
});

router.put('/:id', async (req, res) => {
    console.log(req.params);
    const user = new userEntity.user(req.body.name, req.params.id);

    var result = new commandResult.commandResult(1);
    commandsDbContext.dbContext.update({ TableName: 'users', Key: req.params.id, Item: user }, function(err, data) {
        if (err) 
            result = new commandResult.commandResult(0, eErrorCode.invalidParameters, 'Erro na inserção do usuário.');
        else 
            result = new commandResult.commandResult(1);
    });
   
    controllerBase.getCommandResult(res, result);
});


module.exports = app => app.use('/users', router);