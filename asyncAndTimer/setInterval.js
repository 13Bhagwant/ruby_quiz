let counter=1;
let message=function(){
            console.log(`you have been staring at your console for ${counter} seconds`);
    counter++;// counter=counter +1    
}
let timeOutID=setInterval(message,1000)
setTimeout(()=>clearInterval(timeOutID),10000)
