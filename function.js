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
const arrowfunc1 = (a, b) => {
    console.log(a * b);
}

arrowfunc1(5,8);

// practice question :-
//  Q1. creat a function using the "function" keyword that a strict as an argument & return the 
// number of vowels in the string. (a,e,i,o,u)

function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("aeiou")); // Output: 5

// Q2. Creat an arrow function to perform same task  