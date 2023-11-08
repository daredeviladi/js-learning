// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1);  //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true 


// console.log("2" > 1); // true (automatically converted into numbers)
// console.log("02" > 1);

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false

// === 

console.log("2" === 2); //false

//The reason is that an equality check == and comparisons > < >= <= work differently.
//comparisons convert null to a number, treating it as 0. That's why (3) null>=0 is false.