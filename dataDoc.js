var Document = require('camo').Document;
var dataDoc = class Data extends Document {
    constructor() {
        super();

        this.title = String;
    }

    static collectionName() {
        return 'datas';
    }

    static findAll() {
        return this.find({});
    }
}

module.exports = dataDoc;