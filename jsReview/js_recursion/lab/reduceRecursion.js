function recursiveReduce(arr, cb){
    if(arr.length===1){
        return arr[0];
    }else{
        return cb(arr[0], recursiveReduce(arr.slice(1), cb))
    }
}
//