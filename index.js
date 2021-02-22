// Code your solutions in this file

function writeCards(names, event){
    let arr = [];
    for (let i = 0; i< names.length; i++){
        console.log(names[i]);
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return arr;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}