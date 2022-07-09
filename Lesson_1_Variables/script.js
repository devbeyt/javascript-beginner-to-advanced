// ************ str & int ***************

let name = "Jhone"; 
let age = 30; 
const API = "localhost//www.cite/posts";
// const API = "localhost//www.cite/users"  / error
console.log(`User name :${name}  / User age is ${age}`);

console.log("****************** Boolean ***********************")

let isLoading = true;
let user = "";
let user2 = " ";
let count = -1;
let zero = 0;
let isNumber = "12345"

console.log("isLoading :" + Boolean(isLoading));
console.log("user     :" + Boolean(user));
console.log("user 2   :" + Boolean(user2));
console.log("count    :" + Boolean(count));
console.log("zero    :" + Boolean(zero));

console.log("********************* typeof *****************")

console.log("isloading   type is :" + typeof(isLoading))
console.log("user   type is :" + typeof(user))
console.log("count   type is :" + typeof(count))
console.log("isNumber   type is :" + typeof(isNumber))


console.log("****************** Methods ************************")
//  1
let text = "ABSCODOGMRHBDORMGHDUDMD";

const len = text.length;
console.log("lENGTH :" + len)


//  2
const users = ["Jhone","Mary","Smith"]

const filtered = users.indexOf("Mary");
if(filtered){
    console.log("Axtardiginiz userin indexi :" + filtered )
}else{
    console.log("Axtardiginiz user tapilmadi")
}

// 3

function getCharCount(str){
      return str.length;
}


console.log(getCharCount("Jason 1245"))
console.log(getCharCount("Jhone "))
console.log(getCharCount("Mary"))









