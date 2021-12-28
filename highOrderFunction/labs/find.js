const array = [1, 2, 6, 'a', '7','s' ,3, 4, 4, 2];
const find= array.find(element => element > 3);
const found = array.find(element => element / 3);
const string=array.find(string => typeof string === 'string' && string !== '')

const firstDuplicate=array.find(element => element )
console.log(firstDuplicate);

console.log(find);
console.log(found);
console.log(string);


