const accountId = 144553//constant variable!! //value can't be change
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//khali let ka variable undefined variable print karegaa


// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//table to print all values in tabular structures 