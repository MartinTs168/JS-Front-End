function solve(arr) {
    /**
     officially the dumbmest block of code i have ever written
     i think it's time for a break :)
     */
    const movies = [];
    arr.forEach((element) => {
        if (element.includes('addMovie')) {
            let name = element.slice(9);
            movies.push({ name });
        } else if (element.includes('directedBy')) {
            const name = element.slice(0, element.indexOf(' directedBy'));
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie['director'] = element.slice(
                        element.indexOf(' directedBy ') + 12
                    );
                }
            });
        } else if (element.includes('onDate')) {
            const name = element.slice(0, element.indexOf(' onDate'));
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie['date'] = element.slice(
                        element.indexOf(' onDate ') + 8
                    );
                }
            });
        }
    });

    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);
