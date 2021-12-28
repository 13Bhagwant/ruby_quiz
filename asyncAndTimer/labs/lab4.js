let Message=function(){
            console.log(`Bhagwant`);
   
}
let timeOutID=setInterval(Message,1000)
setTimeout(()=>clearInterval(timeOutID),11000)