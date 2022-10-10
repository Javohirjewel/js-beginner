let a=prompt("Biron bir son kiriting ")

if(a%3===0 && a%5===0){
    alert("FizzBazz");
}else if(a%3===0){
    alert("Fizz");
}else if(a%5===0){
    alert("Bazz");
}else if(a%3===0 && a%5===0){
    alert("FizzBazz");
}else{
    alert("Boshqottan urinib ko'ring")
}