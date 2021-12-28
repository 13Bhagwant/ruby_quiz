const array = ['a', '1', 55, 5, 8, 'apple', 25 ,25];
const result = array.filter(string => typeof string === 'string' && string !== '')
const result1 = array.filter(word => word > 6);
const result2 = array.filter(word => word.length > 3);
console.log(result);
console.log(result1);
console.log(result2);

