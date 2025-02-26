const router = require('express').Router();
const controllerBase = require('../../domain/util/controllerBase');
const queriesHandler = require('../../domain/queries/queriesHandler');
const listUsersQuery = require('../../domain/queries/users/listUsersQuery');
const getUserQuery = require('../../domain/queries/users/getUserQuery');

router.get('/', async (req, res) => {
    var query = new listUsersQuery.listUsers();
    controllerBase.getQueryResult(res, await queriesHandler.runQuery(query));
});

router.get('/:id', async (req, res) => {
    var query = new getUserQuery.getUser(req.params.id, req.query.name);
    controllerBase.getQueryResult(res, await queriesHandler.runQuery(query));
});

module.exports = app => app.use('/users', router);