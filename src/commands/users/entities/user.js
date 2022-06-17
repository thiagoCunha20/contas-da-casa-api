const guid = require('../../../util/util');

class user {
    constructor(name, age, mother, father, id = null){
        this.id = id ?? guid.createGUID();
        this.name = name;
        this.age = age;
        this.mother = mother;
        this.father = father;
    }
}

module.exports = { user };