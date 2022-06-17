const guid = require('../../../util/util');

class user {
    constructor(name, id = null){
        this.id = id ?? guid.createGUID();
        this.name = name;
    }
}

module.exports = { user };