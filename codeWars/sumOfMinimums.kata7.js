const sumOfMinimums=arr=>{
    let sum=0;
   for (let r=0;r<arr.length;r++){
// let mini=arr[r][0];
//  for (let c = 1; c<arr.length;c++){
//      if (arr[r][c]<mini){
//          mini = arr[r][c];
//      }
//  }
//  sum = sum + mini;
sum = sum + Math.min(...arr[r])
}
return sum;
   }
   const array=[
       [1,2,3,],
       [4,56,7,8],
       [5,6,7,8,9]
                ];
sumOfMinimums(array)
console.log(sumOfMinimums(array));
