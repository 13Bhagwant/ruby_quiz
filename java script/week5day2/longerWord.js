let x=process.argv[2];
let y=process.argv[3];

if (typeof x!=="string" || typeof y!=="string" ){
    console.log("please input two numbers");
    return;   
}else{
if(x.length > y.length){
    console.log(x.toUpperCase() + " is greater than " +y.toUpperCase());
}else if(x.length < y.length){
    console.log(y.toUpperCase() + " is greater than " + x.toUpperCase());
}else{
    console.log(x.toUpperCase() + " is equal to " + y.toUpperCase());
}
   }

