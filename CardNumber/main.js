let cardNum=prompt("karta raqamini kiriting")
let cardSec = cardNum.slice(0, 4)+ "********" + cardNum.slice(12, 16);
function cardNumber(cardNum){
    if(cardNum.length===16 && !isNaN(+cardNum) || cardNum==null){
        if(cardNum.startsWith("8600")){
            console.log("UzCard plastik ishlatasiz")
            console.log(cardSec)
        } else if(cardNum.startsWith("9860")){
            console.log("Humo plastik ishlatasiz")
            console.log(cardSec)
        }else{
            console.log("Xato karta kirittez")
        }  
    } 
    else{
        console.log('short or long card number')
    }
}
cardNumber(cardNum)

