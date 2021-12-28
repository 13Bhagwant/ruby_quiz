let x=Number(process.argv[2]);
let y=Number(process.argv[3]);

if (isNaN (x) || isNaN (y) ){
    console.log("please input two numbers");
    return;   
}else{
if(x > y){
    console.log(x + " is greater than " +y);
}else if(x < y){
    console.log(y + " is greater than " + x);
}else{
    console.log(x + " is equal to " + y);
}   
}