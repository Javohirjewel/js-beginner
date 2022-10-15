
let  numberOfFilms = prompt(" Qancha film ko'rgansiz?")

if(typeof +numberOfFilms === "number" && !isNaN(numberOfFilms) ){
    for(let i = 0; i < numberOfFilms; i++){
        if(numberOfFilms=="" || numberOfFilms==null){
           i--;
        }
        else{
            numberOfFilms = prompt(" Qancha film ko'rgansiz?")
            let personalMovieDB = {
                count: numberOfFilms,
                movies : {},
                actors : {},
                genres : [],
                privat : false
            }
            for (let i = 0; i < numberOfFilms; i++) {
                let LastFilm = prompt("Oxirgi ko'rgan filmlaringizdan biri?,");
                let GenresFilm = prompt("Ko'rgan filmingiz janri")
                let RatingFilm = prompt("Uni qancha baholagan bo'lardingiz?" )
                if(LastFilm== '' || LastFilm == null){
                    personalMovieDB.movies[LastFilm] = RatingFilm;
                    personalMovieDB.genres = GenresFilm;
                    console.log(personalMovieDB)

                if(LastFilm == '' || RatingFilm == '' || LastFilm==null || RatingFilm==null){
                   i--;
                }else{
                    personalMovieDB.movies[LastFilm] = RatingFilm;
                }   
                }
                else{
                    alert("Iltimos Reyting uchun son kiritvoren")
                }    
            }
        }
    }
        
}


else{
    alert("Kino soni so'ralyapti")
}
if(numberOfFilms>30){
    console.log("Siz kino ishqibozisiz")
}
else if(numberOfFilms>10){
    console.log("Siz klassik tomoshabinsiz")
}
else if(numberOfFilms<=10 && numberOfFilms>0){
    console.log("Ko'rilgan filmlar soni kam")
}else{
   console.log("Xatolik yuz berdi")
}
