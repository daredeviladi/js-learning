const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // from this we can add string to numbers 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // but this is a better way

const gameName = new String('hitesh-hc-com') // it will create new string which have diffrerent prototypes and all the details of strings

// console.log(gameName[0]);
// console.log(gameName.__proto__);

//Functions of String 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString); // it will give the substring in a new string name 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // we can also use it by slicing the string using negative index

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it work upon white spaces both the sides 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));