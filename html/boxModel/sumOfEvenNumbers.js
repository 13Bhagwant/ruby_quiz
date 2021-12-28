const argumentList = process.argv[2];
let Newarr = argumentList.split('');
console.log(Newarr);
  function sumeven(Newarr){
    let sum = 0;
    for (let i = 0; i<Newarr.length; i++){
        if(Newarr[i] % 2 === 0){
            sum +=Number(Newarr[i]);
        }
    }
    return sum;
}
console.log(sumeven(Newarr));
