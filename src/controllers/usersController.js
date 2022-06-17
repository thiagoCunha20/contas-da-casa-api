const router = require('express').Router();
const controllerBase = require('../util/controllerBase');
const queriesHandler = require('../queries/queriesHandler');
const listUsersQuery = require('../queries/users/listUsersQuery');
const getUserQuery = require('../queries/users/getUserQuery');

router.get('/', async (req, res) => {
    var query = new listUsersQuery.listUsers();
    controllerBase.getQueryResult(res, await queriesHandler.runQuery(query));
});

router.get('/:id', async (req, res) => {
    var query = new getUserQuery.getUser(req.params.id, req.query.name);
    controllerBase.getQueryResult(res, await queriesHandler.runQuery(query));
});

module.exports = app => app.use('/users', router);