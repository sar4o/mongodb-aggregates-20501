db.movies.aggregate(
    {
        $match: {year: 1915}
    },
    {
        $project: {
            tittle: 1, year: 1,
            'imdbRating' : '$imdb.rating'
        }
    },
    {$sort: {$imdbRating: -1}},
    {$limit: 3}
);

db.movies.find(
    {year: 1915}, {
        tittle:1, year:1,
        'imdbRating': '$imdb.rating'
    }
);