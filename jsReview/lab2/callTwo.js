function doubleit(num){
    return num*2
}
function addone(num){
    return num+1;
}
function callTwo(num,doubleit,addone){
    return addone(doubleit(num))
}
console.log(callTwo(100,doubleit,addone));