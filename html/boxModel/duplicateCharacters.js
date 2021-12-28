let a=[1,1,1,2,2,2,3,3,4,4,4,4,3,2,2,4,];
let b=[];
let len =a.length;

for(let i=0;i<len;i++){
    if(b.indexOf(a[i])=== -1){
        b.push(a[i]);
    }
}
console.log(b);
