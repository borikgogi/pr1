const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");


const personalMovieDB = {
	ocunt: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Один из последних просмотреніх фильмов?", ""),
	  b = prompt("Насколько оцените его?", ""),
	  c = prompt("Один из последних просмотреніх фильмов?", ""),
	  d = prompt("Насколько оцените его?", "");

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

console.log(personalMovieDB);