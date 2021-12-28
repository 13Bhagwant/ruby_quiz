let userName=process.argv[2]
//console.log(typeof userName);

let guessNumber=process.argv[3]
//console.log( typeof guessNumber);//convert unserName to number type
let numberGuessNumber=parseInt(guessNumber);

let mySecretNumber=13;
//console.log( typeof myScretNumber);

if (numberGuessNumber===mySecretNumber){
    console.log('Hurray !' + userName + ' you guesed right number,my secret number is ' + mySecretNumber);
}else{
    console.log('Bad luck!' + ' '+ userName + ' ' + 'try next time');
}
