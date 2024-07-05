// function myfunction(){
// console.log("welcome to web bocket");
// console.log("hello everyone")
// }

// myfunction();
// myfunction();
// myfunction();



// function myFunc(mdg){
//     console.log(msg);
// }


// myFunc("today is a great day and GIFT is best for technical education")




// function -> 2 numbers sum

 

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 5)); // Output: 8
// console.log(sum(10, 2)); // Output: 12


// function sum(a, b) {
//     c= a + b;
  
//   console.log("sum of a+b is ",c); 
// }

// sum(5,8)
  


// sum function

// function sum(a,b){
//      return a+ b;
//  }


 // arrow function in SUM


//  const arrowfunc = (a, b) => {
//     console.log(a +b);
//  }


//multiplication function

// function mul(a ,b){
//     return a * b;
// }

// arrow function in MUL
// const arrowfunc1 = (a, b) => {
//     console.log(a * b);
// }

// arrowfunc1(5,8);

// practice question :-
//  Q1. creat a function using the "function" keyword that a strict as an argument & return the 
// number of vowels in the string. (a,e,i,o,u)

// function countVowels(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   for(let i = 0; i < str.length; i++) {
//     if(vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hello world")); // Output: 3
// console.log(countVowels("aeiou")); // Output: 5

// Q2. Creat an arrow function to perform same task  


// forEach loop in array

// let arr = [1,2,3,4,5,6,7];

// arr.forEach(function printVal(val) {
//   console.log(val);
// })

// arr.forEach((val) => {
//   console.log(val)
// })

// let arr = ["pune","mumbai","bbsr"];

// arr.forEach((val) => {
//   console.log(val.toUpperCase());
// })

//practice question

//1. for a given array of numbers, print the square of each value using the foreach loop,
 //nums = [2,3,4,5,6] ---->

//  let nums = [2,3,4,5,6];

// nums.forEach((val) => {

//     let arr=val ** 2;
//     console.log(arr);
    
// })

// let nums = [67,52,39];

// let newArr = nums.map((val) => {
//   return val * val;
// })

// console.log(newArr);
// console.log(nums);

// array filter method

// let arr = [1,2,3,4,5,6,7,8,9,];

// let newArr = arr.filter((val) => {
//   return val % 2 == 0;
// })
