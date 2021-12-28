let counter=0
let print=function(){
    console.log('Bhagwant' + counter);
    counter++;
}

let timeOut=setInterval(print,2000)
setTimeout(()=>clearInterval(timeOut),2000)


let timerId=setInterval(()=>{
    console.log('My Name');
    
},1000)

setTimeout(()=>{clearInterval(timerId)},10000)