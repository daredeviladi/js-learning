// singleton
// Object.create //constructor wala object single object types


// object literals // have different instances 

const mySym = Symbol("key1") // unique datatypee


const JsUser = {           //creating a object
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",            //symbol declaration
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)      //for accessing the object
// console.log(JsUser["email"])//but it was the good practice beacause "full name" is a string we need to fill it with [].
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  //akela mysym ko access karega to wo string ki tarah access karta par square bracket as a symbol lega

JsUser.email = "hitesh@chatgpt.com" // for changing the email
// Object.freeze(JsUser) //for freezing the value of key
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //change nahii hoga freeze ho gya

JsUser.greeting = function(){
    console.log("Hello JS user");
}//adding function as a variable in object
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());//it will return functions
console.log(JsUser.greetingTwo());