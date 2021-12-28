//Startind Array
if(false) {let shoppingList=['shoes','watch','fruits','Pen'];
//console.log('old ShoppingList:');
//console.log('********************');
//console.log(shoppingList);
shoppingList[0]='Runners' 
//console.log('New ShoppingList');
//console.log('*************');
//console.log(shoppingList);

shoppingList[4]='Belt'
//console.log('*************');
console.log(' NewshoppingList');
shoppingList[5]="Sunglasses"
shoppingList[6]=null
shoppingList[7]=true
shoppingList[8]=['Z','Y',[1,2,3],'X']
console.log('*************');
console.log(shoppingList);
console.log( shoppingList[8][2][2]);

console.log('New ShoppingList:');
console.log('*************');
console.log(shoppingList);
let item1='shoes';
let item2='watch';
let item3='fruits';
let item4='Pen';
let emptyArray=[];
console.log('Empty Array:');
console.log(emptyArray);
}

//.push(element to last) .pop(take out last element) .unshift(element to first position) .shift(take out first element)
if (false){
    let animals=[]
    animals.push('cat')
    animals.push('Dog')
    animals.push('lama')
    animals.unshift('Lion')
    console.log('Array After Pop');
    console.log('+++++++****++++++');
    console.log(animals);
   // console.log(animals.length);
    let lastElementOfArray=animals.pop()
    console.log(animals);
    console.log(lastElementOfArray + ' is a beautiful animal');
    //console.log('Array After shift');
    //let firstElementOfArray=animals.shift()
    //console.log(animals);
    //console.log(firstElementOfArray + ' is a innocent animal');
}
//.concat (joining two or more arrays)
if (false){
    let furryAnimal=['Dog','cat','Squirel']
    let scalyAnimal=['fish','snake','crocodile']
    let featherAnimal=['Ostrich','Grey Parrot','Eagel']

    let allAnimal=scalyAnimal.concat(furryAnimal,featherAnimal);
    console.log(allAnimal);
}

//indexof() 
if (true){

    let favouritecolor=['Black','Grey','Blue','']
    console.log(favouritecolor.indexOf('Black'));
    console.log(favouritecolor.indexOf('Blue'));
}
//Spacing array elements with (anything)
if (false){
    let boredAnimals=['Monkey','Cat','Dog']
    console.log(boredAnimals.join());
    console.log(boredAnimals.join('-'));//join with -
    console.log(boredAnimals.join('*'));//join with *
    console.log(boredAnimals.join('&'));//join with &
}