node = 0;
notFound = 1;
invalidParameters =  2;
notAllowedCommand = 3;
unauthorized = 4;
duplicateUniqueIdentifier = 5;

function GetErrorCodeName(errorCode) {
    switch(errorCode) {
        case 0: return 'None';
        case 1: return 'NotFound';
        case 2: return 'InvalidParameters';
        case 3: return 'NotAllowedCommand';
        case 4: return 'Unauthorized';
        case 5: return 'DuplicateUniqueIdentifier';
        default: return 'InvalidErrorCode'
    }
}

module.exports = { 
    node, 
    notFound, 
    invalidParameters, 
    notAllowedCommand, 
    unauthorized, 
    duplicateUniqueIdentifier, 
    GetErrorCodeName };