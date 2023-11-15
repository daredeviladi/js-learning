// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"] //arrays mei n ham koi bhi different type ke datatypes bhi daal sktee

const myArr2 = new Array(1, 2, 3, 4) // create new array just like string and have functiond and prototype
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // push() adds new items to the end of an array:


// myArr.push(7)
// myArr.pop() //removes (pops) the last element of an array.


// myArr.unshift(9)//method adds new elements to the beginning of an array.The unshift() method overwrites the original array. and every element shift by one place

// myArr.shift()//Shift (remove) the first element of the array: and all elements shift towards first position

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      //The join() method returns an array as a string.The join() method does not change the original array.Any separator can be specified. The default is comma (,).
 


// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //ye ek new array mein save kar dete haii without chnging any original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // but yaaha par original array mein bas  Range- {1,3} bachta haii splice wali change remove kar deta haii splicee
console.log("C ", myArr);
console.log(myn2);