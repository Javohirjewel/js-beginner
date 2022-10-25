


let words = prompt('Soz kiritin');

function some(str){
    
    let obj = {};
    let arr=str.split('');
    
    for (let i = 0; i < arr.length; i++) {

        obj[arr[i]] = ''
    }
    console.log(Object.keys(obj).join(' '))
}
some(words)



////2 uyga vazifa
let log="458877"
function main(str2){
    let arr=[];
    for(let i=0; i++; i<str2.length){
        if(str2[i]!==str2[i+1]){
            arr.push(str1[i])
        }
    }
    return arr
}
console.log(main(log))

