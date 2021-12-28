let x =8000;
let print=function(){
    console.log(process.argv[2] );
}
let timeOut=setInterval(print,1000)
setTimeout(()=>clearInterval(timeOut),x)