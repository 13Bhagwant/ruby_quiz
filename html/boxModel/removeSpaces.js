let y=process.argv[2];
let newString="";
for(let i=0;i<y.length;i++)
{
    if(y[i]!=' '){
        newString+=y[i];
               
    }
}
console.log(newString)

