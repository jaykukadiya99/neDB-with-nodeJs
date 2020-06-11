var Document = require('camo').Document;

var movie = class Movie extends Document {
    constructor() {
        super();

        this.title = String;
        this.rating = {
            type: String,
            choices: ['G', 'PG', 'PG-13', 'R']
        };
        this.releaseDate = Date;
        this.hasCreditCookie = Boolean;
    }

    static collectionName() {
        return 'movies';
    }

    static findAllRMovies() {
        return this.find({});
    }
}

module.exports = movie;