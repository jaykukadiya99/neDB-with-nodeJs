var Document = require('camo').Document;

var movie = class Movie extends Document {
    constructor() {
        super();

        this.title = String;
        this.rating = {
            type: String,
            choices: ['G', 'PG', 'PG-13', 'R']
        };
        this.dataObj = Object;
    }

    static collectionName() {
        return 'movies';
    }

    static findAllRMovies() {
        var n = "jay";
        var para = 'name';
        var dataObj = 'dataObj.' + para;
        return this.find({
            [dataObj]: n });
    }
}

module.exports = movie;