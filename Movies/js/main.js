let  numberOfFilms = prompt(" Qancha film ko'rgansiz?")

if(typeof +numberOfFilms === "number" && !isNaN(numberOfFilms)){
    let personalMovieDB = {
        count: numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    }
    let LastFilm = prompt("Oxirgi ko'rgan filmlaringizdan biri?,");

    let GenresFilm = prompt("Ko'rgan filmingiz janri")
    let RatingFilm = prompt("Uni qancha baholagan bo'lardingiz?" )
    if(typeof +RatingFilm === "number" && !isNaN(RatingFilm)){
        personalMovieDB.movies[LastFilm] = RatingFilm;
        personalMovieDB.genres = GenresFilm;
        console.log(personalMovieDB)
    }
    else{
        alert("Iltimos Reyting uchun son kiritvoren")
    }
}else{
    alert("Kino soni so'ralyapti")
}

