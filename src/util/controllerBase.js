function getQueryResult(res, queryResult){
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