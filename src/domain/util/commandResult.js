const eErrorCode = require('./eErrorCode');

class commandResult {
    constructor(rows, errorCode = 0, errorMessage = null, resultData = null) {
        this.rows = rows;
        this.resultData = resultData;
        this.errorCode = errorCode;
        this.errorName = eErrorCode.GetErrorCodeName(errorCode);
        this.errorMessage = errorMessage;
    }
}

module.exports = { commandResult };