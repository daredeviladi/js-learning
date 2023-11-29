//singleton address
//const.create 
const tinderUser =new Object() //singleton object constructor se banaa

//const tinderUser ={} //non singleton user
tinderUser.id ="123abc"
tinderUser.name = "Adi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullName:{
            firstName : "Aditya" ,
            lastName : "Gupta"
        }
    }
}

//console.log(regularUser.fullname?.userFullName.firstName); //if question ke andar value padi hoo kind of if else

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 ={obj1 ,obj2 }//same array wali problem when we concat 2 object

//const obj3 = Object.assign({},obj1 ,obj2) //{}, it is optional parameter but a good practice according to documentation agar ham {} nahi dege to  syntaxically sare values obj1 mein jaa rae haaii

const obj3={...obj1,...obj2}//betterpractice and easy one!!!!!!

// console.log(obj3)

const users = [         //jab apis ke through array mein objects aaegee unka format
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser  )

// console.log(Object.keys(tinderUser)); //for finding all the keys
// console.log(Object.values(tinderUser)); //for finding all the values
// console.log(Object.entries(tinderUser)); //for finding all the entries


//destructuring the objects
const course={
    coursename : "js in hindi",
    price:"999",
    courseInst:"hitesh"
}

// course.courseInst for accesing the value

const {courseInst :inst}=course;
// console.log(courseInst);
// console.log(inst); both will give same output

//in react we use props but to write kless code we destructre code
// const navbar =({inst})=>{

// }

//API ->apna kam kisi or ke sar dalna...pehle data aata the xml form abhi aata json format mein

//json format - object naam hota haii agar object ka naam nahi hoga to use json ki tarah treat karege . keys,values both are in string

// {
//     name:"Adi",
//     coursenamec:"js",
//     proice: "free"
// }


