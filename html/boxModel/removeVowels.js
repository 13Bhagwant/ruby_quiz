let y=process.argv[2]
let x =y.toLowerCase();
let newString="";
for(let i=0;i<x.length;i++)
{
    if(x[i]!="a" && x[i]!="e" && x[i]!='i' && x[i]!='o' &&  x[i]!='u'){
        newString+=x[i];
               
    }
}
console.log(newString)