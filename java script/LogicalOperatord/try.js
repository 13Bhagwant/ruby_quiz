let ageOfKid=process.argv[2];
let ageRistriction=16;
let isaccompnied=process.argv[4]==='true'? true: false;
if(ageOfKid||isaccompnied>ageRistriction )
{
console.log("yes you can watch the movie");
}else{console.log("sorry you can not watch the movie");
};

    
