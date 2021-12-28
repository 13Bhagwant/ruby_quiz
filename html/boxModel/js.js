if (true){
    let a='Bhagwant';
    console.log(a);
    
}
for (let a=1;a<5;a++){
    console.log(a);
    
}
let b='b';
{
    //var  c='c'//bad pracice
    let c='c'
    console.log(b);
    console.log(c);   
} 
console.log(b);
//console.log(c);

//Variable Shawdowing

let a ='a'//global scope
{
    let a='Shadowed a'
    console.log(a);//a-1
    {   let a='shadowed a'
        console.log(a);//a-1
        
    }
}
console.log(a);//a-3

//let & const

const x=1313;
// x=3333//can do this ?

let y=1214;
y = 1412//can i do this ?
console.log(y);

let array=[1,2,3,4]
console.log(array[0]);
console.log(array);
console.log(array.shift());
console.log(array);

const array2=[1,2,3,4]
console.log(array2[0]);
console.log(array2);
console.log(array2.shift());
console.log(array2);






