const accountId=144335
let accountEmail="saurabh123@gmail.com"
var accountpassword="12345"
accountCity="jaipur"
let accountstate;

// accountId=2 not allowed
accountEmail="hssf@gmail.com"
accountpassword="233434"
accountCity="bangaluru"
console.log(accountId);
/*
prefer not to use var
because of issue in blockscope and functional scope
(means agar koi programmer same variable use krke 
kuchh change krega to us nam ke har variable pr change hogi) 
*/
console.table([accountId,accountEmail,accountpassword,accountCity,accountstate])
