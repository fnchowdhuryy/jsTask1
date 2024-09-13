let  FavMovie=["A","B","C","d"];
FavMovie.push("E","F");
FavMovie.shift();

var Upper=FavMovie.map(movie => movie.toUpperCase());
console.log(Upper);