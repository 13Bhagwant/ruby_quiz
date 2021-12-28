//recursive method
function fib(n) {
    if (n<2){
    return n
}
return fib(n-1)+fib(n-2)
}
console.log(fib(6));
//Iteratively
function fibLoop(n){
    let x=[0,1]
    for (let i=2;i<n+1;i++){
        x.push(x[i-2]+x[i-1])
    }
    return x[n]
}
//Bench mark
console.time("loop")
fibLoop(40);
console.timeEnd("loop")
console.time("recursive")
fib(40)
console.timeEnd("recursive")