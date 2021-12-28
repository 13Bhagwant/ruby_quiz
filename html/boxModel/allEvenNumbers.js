const argumentList = process.argv[2];
let Newarr = argumentList.split(" ");
console.log(Newarr);
function checkeven(Newarr){
    for(let i=0;i<Newarr.length; i++){
        if (Newarr[i] % 2 === 0){
            return true;
        }
        return false;
}   }
console.log(checkeven(Newarr));