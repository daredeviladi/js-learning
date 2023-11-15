// Dates

let myDate = new Date()
 //console.log(myDate.toString()); //Wed Nov 15 2023 06:35:01 GMT+0000 (Coordinated Universal Time)
 //console.log(myDate.toDateString()); //Wed Nov 15 2023
 //console.log(myDate.toLocaleString());//11/15/2023, 6:35:01 AM
 //console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

 console.log(myTimeStamp); //1700030263990   //*****wo 1970 ka ek time haii use kitne microsecond time ho gya hai *********/
 console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
//weekday object important
newDate.toLocaleString('default', {
    weekday: "long",
    
})
