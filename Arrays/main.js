

let club = ['Barcelona', 'PSJ', 'Manchester United', 'Real Madrid', 'Juventus', 'Machester City', 'Nasaf', 'Chelsea', 'Arsenal', 'Liverpool']


for(let i in club){
    console.log(i + " " + club[i])
}



function arrPush(str){
    if(str){
        club[club.length] = str
        console.log(club)
    }else{
        console.log(club)
    }
}


function arrPop(){
    club.splice(club.length-1)
    console.log(club)
}

arrPush("Atletico Madtid")
arrPop()
arrPush("Atletico Madtid")





