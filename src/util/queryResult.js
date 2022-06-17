const eErrorCode = require('./eErrorCode');

class queryResult {
    constructor(data, errorCode = 0, errorMessage = null) {
        this.totalRows = data?.length ?? 0;
        this.data = data;
        this.errorCode = errorCode;
        this.errorName = eErrorCode.GetErrorCodeName(errorCode);
        this.errorMessage = errorMessage;
    }
}

module.exports = { queryResult };