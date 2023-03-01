function movies(arrayMovies) {

    let resultArray = [];
    for (let currentMovie of arrayMovies) {
        let movieInfo = {};
        let currentMovieArray = currentMovie.split(" ");
        // console.log(currentMovieArray);

        if (currentMovieArray.includes('addMovie')) {
            let movieToBeAdded = currentMovieArray.slice(1, (currentMovieArray.length)).join(" ");
            // console.log(movieToBeAdded);
            resultArray.push(movieInfo);
            movieInfo.name = movieToBeAdded;
            // console.log(movieInfo);

        } else if (currentMovieArray.includes('directedBy')) {

            let caseDirectedByMovieToBeAddedArray = currentMovie.split(" directedBy ");
            let movieToBeAdded = caseDirectedByMovieToBeAddedArray[0];
            let directorToBeAdded = caseDirectedByMovieToBeAddedArray[1];
            if ((ifExist)(resultArray,movieToBeAdded)){
                addProperty(resultArray,movieToBeAdded,'director:',directorToBeAdded);
            }

        } else if (currentMovieArray.includes('onDate')) {
            let caseOnDateMovieToBeAdded = currentMovie.split(" onDate ");
            let movieToBeAdded = caseOnDateMovieToBeAdded[0];
            let dateToBeAdded = caseOnDateMovieToBeAdded[1];
            if (ifExist(resultArray,movieToBeAdded)) {
                addProperty(resultArray,movieToBeAdded,'date',dateToBeAdded);
            }

        }
    }
    for (let element of resultArray){
        if (element.name !== undefined && element.director !== undefined && element.date !== undefined){
            console.log(JSON.stringify(element));
        }
    }
    
    function addProperty(resultArray, movie, property, value) {
        for (let element of resultArray) {
            if (movie.name = element) {
                element[property] = value;
            }
        }
        return resultArray;
    }
    function ifExist(resultArray, movieName) {
        for (let element of resultArray) {
            if (element.name === movieName) {
                return true;
            }
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])