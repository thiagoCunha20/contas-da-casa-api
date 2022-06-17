const queryResult = require('../util/queryResult');
const eErrorCode = require('../util/eErrorCode');

async function runQuery(query) {
    if (!query) 
        return new queryResult.queryResult(null, eErrorCode.invalidParameters, 'Consulta inválida. Contate o suporte.')

    var result = query.getError();
    if (result != null && result.eErrorCode != eErrorCode.none)
        return result;

    return await query.execute();
}

module.exports = { runQuery };