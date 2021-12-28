if(false){
//let arrAnimals=['cat','mouse','dog']
let myCat={ 
    legs:4,
    "name of my cat":"mhiayu",
    color:"white"
};
console.log(myCat);
// accessing values using []- square Brackets
console.log(myCat["legs"]);
console.log(myCat["color"]);
console.log(myCat["name of my cat"]);
// accessing values using . dot Notaions
console.log('Accessing Values using . dot natotions');
console.log("****************");
console.log(Object.keys(myCat));
//Objects.keys used t get list of all the keys
console.log(Object.getOwnPropertyNames(myCat));
}

if (false){
let myPet={
    "breed":"Pitbull",
    "legs":4,
    "Name":"Devil",
    "Nature":"friendly with me only",
    "Attractiveness":"Eyes"
}
console.log(myPet);
}


if (false){
let myCat={};
console.log(myCat);
myCat["legs"]=4;//adding values using []-sqaure brackets
myCat["color"]="darkBlack";//adding values using []-sqaure brackets
myCat["Name"]="Billi";//adding values using []-sqaure brackets
myCat["Eyes_color"]="green";//adding values using []-sqaure brackets
console.log(myCat);
myCat.isMale=true;//adding values using .dot notations
console.log(myCat);
}
if (false){
let cat1={
    name:'Lisa',
    color:'balck',
    Eyes_color:'blue',
}
let cat2={
    name:'Parneet',
    color:'white',
    Eyes_color:'balck',
}
let cat3={
    name:'Komal',
    color:'golden',
    Eyes_color:'green',
}

let myPetCats=[cat1,cat2,cat3];
console.log(myPetCats);
}
if (false){
let iphones={company:"apple",
    2007:"iphone",
    2008:"iphone4",
    2009:"iphone5"
}
let samsungPhones={company:"samsung",
    2008:'glaxyS1',
    2009:'glaxyS2',
    2010:'glaxyS3',
}
let oppo={company:"oppo",
    2013:"F1",
    2015:"F2",
    2014:"F3",

}

let mobilePhones=[iphones,samsungPhones,oppo]
console.log(mobilePhones);
}
 if (false){
     let aboutMe={
         name:"still developing",
         age:18,
         isStudent:true,
         favouriteNumber:[13,13,0013,1313,],
     }
     console.log(aboutMe);     
 }
if (false){
let Parneet={
    name:"parneet",
         age:18,
         isStudent:true,
         favouriteNumber:[13,13,1300,1313,2314],}

let komal={
    name:"Komal",
         age:19,
         isStudent:true,
         favouriteNumber:[1,3,4,13,],
}       
let  Jasleen={
    name:"Jasleen",
         age:23,
         isStudent:true,
         favouriteNumber:[133,13,13500,13133,24314],
}  
let myFriends=[Parneet,Jasleen,komal]
console.log(myFriends[2].favouriteNumber[4]);

console.log((Parneet.hasOwnProperty('isStudent'))         
);
}

if(false){
    let Jasleen={name:"Jasleen",
        Money:1000000
    }
    let Komal={name:"Komal",
        Money:130000003333,
    }
    let Parneet={name:"Parneet",
        Money:999999999999,}

 let track_of_owed_money=[Jasleen,Komal,Parneet]
 console.log(track_of_owed_money);
 console.log();
}
if (true){
let movies={
    "carry on jatta":{
    release_date:"July 27 2012",
    cast:["Gippy Grewal","Gurpreet ghuggi","Jaswinder Bhalla"]
    },
    "Manje Bistre":{
        release_date:"April 14 2017",
        cast:["Gippy Grewal","Gurpreet Ghuggi","Karamjit Anmol"]
        },
        "Avengers":{
            release_date:"September 1 1963",
            cast:["Rowaert jr.","Stan lee","Chris Hamesworth"]
            },
        }
        let Fast_and_Furious={
            release_date:"April 14 2017",
            cast:["Vin Diesel","Dwanye Johnson","Chris Morgan"],
            format:"DVD"
        }
        movies["Fast_and_Furious"]=Fast_and_Furious;
        console.log('list of movies');
        console.log('***************');
        
        console.log(Object.keys(movies));
        console.log('Details of movies');
        console.log("****************");
        console.log(movies);
    }
        
        
        
    
