const accountId = 14434234
let accountEmail = "devansh@gmail.com"
var accountPassword = "122334"
accountCity = "Jaipur" //not to be preffered 
let accountState 

// accountId = 2 // not allowed const variable can't be changed later

accountEmail = "hgh@gmail.com"
accountPassword = "11212121"
accountCity = "bengaluru"


console.log(accountId);

/*
Prefernot to use var
because of issue in blockscope and functional scope
*/

console.table([accountId,accountPassword,accountCity,accountEmail,accountState])