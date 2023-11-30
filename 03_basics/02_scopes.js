if (true) {
  let a = 10;
  const b = 20;
//   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c); 30 bahait can aa jaaega var takes more memory and it can be access outside the scopes also *avoid var*


// scope is different in node terminal and browsers console

function one(){
    const username = "aditya"

    function two(){
        const website= "youtube"
        console.log(username);
    }

    // consolel.og(website); it will show error 

    two()
}

// one() 


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); 404
}

// console.log(username); 404


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) error pehle hi call kar diya addone initialize karne se pehle 

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}