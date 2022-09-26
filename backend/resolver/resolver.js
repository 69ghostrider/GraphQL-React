const Movie = require('../model/model');

const resolver = {
    movies: () => {
        return Movie.find({})
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            year: args.year,
            genre: args.genre
        })
        movie.save();
        return movie;
    },
    movieByName: (args) => {
        return Movie.findOne({name : args.name});
    }
}

module.exports = resolver;