let numberOfFilms;





const personalMovieDB = {
	ocunt: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// const a = prompt("Один из последних просмотреніх фильмов?", ""),
// 	  b = prompt("Насколько оцените его?", ""),
// 	  c = prompt("Один из последних просмотреніх фильмов?", ""),
// 	  d = prompt("Насколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


//start();
//rememberMyFilms();
//detectPersonal();
showMyDB(personalMovieDB.privat);
writeYourGenres();




/*********************************** FUNCTIONS ************************************** */
function start(){
	numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
	while(numberOfFilms=="" || numberOfFilms==null || isNaN(numberOfFilms)){
	   numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
	}
}

function rememberMyFilms() {
	const a = prompt("Один из последних просмотреніх фильмов?", ""),
	  	  b = prompt("Насколько оцените его?", "");

	if(a!= null && b!=null && a!="" && b!="" && a.length<50){
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
	}
}

function detectPersonal(){
	if(personalMovieDB.ocunt<10){
		console.log("<10");
	}
	else if(personalMovieDB.ocunt>=10 && personalMovieDB<30){
		console.log("10-30");
	}
	else if (personalMovieDB.ocunt >=30){
		console.log(">30");
	}
	else {
		console.log("ERROR");
	}
}

function showMyDB(hidden){
	if(!hidden){
		console.log(personalMovieDB);
	}
}

function writeYourGenres(){
	for (let i=1; i<=3; i++){
		const str = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i-1]= str;
	}
}


