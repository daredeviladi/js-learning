//Function -> 10-20 line ke code ek package mein band kar dena or use baar baar use karna 

function sayHello(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("o")
}

// sayHello(); //sayHello is only the refrence.

// function addTwoNumbers(number1 , number2){ //function ke andar define kare to uska naam parameter
//     console.log(number1 +number2);
// }

function addTwoNumbers(number1 , number2){ //function ke andar define kare to uska naam parameter
    // let result =number1 +number2;
    // return result;// JAHA return ho gya uske bad kuchh nahi chalega
    return number1+number2
}

const result = addTwoNumbers(3,5)//function call karte waqt datatype ko kehte argument

// console.log("Result: ",result);//return type hai nahi function mein to undefined show karega

function loginUserMessage(username="sammy "){//default value
    if(username === undefined){ //undefined ka value false hota haii
        console,log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Aditya")) //agar aditya ke jagah kuchh bhii nahi dalaa to undefined just log in aaega


function calculateCartPrice(...num1){//jab user cart mein value add karte hi jaa rae 
    return num1
}//we can tackle it using rest(...num1) operator or jitne marji number add karlo ye array banake dedega


const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
} //koii bhi object jo aaega usko tackle karne ka tareeka 
// handleObject(user)

handleObject({ //direct object pass karna
    username: "Sam",
    price:399
})

//Array pass karne ka tareeka

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400]));//if value nahi hai to undefined print karega