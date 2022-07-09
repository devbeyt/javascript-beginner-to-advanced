console.log("****************** FOR ***********************");

const users = ["Jhone","Cristy","Mary","Watson"]

let i = 0;
let len = users.length;
for(; i < len; i++){
    console.log(users[i])
}

console.log("****************** FOR OF***********************");

for(user of users){
    // document.write(user + "<br>")
}




console.log("****************** FOR ***********************");


for(user in users){
    console.log( user + "  " + users[user])
}





console.log("****************** WHILE ***********************");


let count = 0;

while(count < 10){
    console.log(count)
    count ++;
}


console.log("****************** FOREACH ***********************");

users.forEach(function(item,index){
    console.log(`${index} -- ${item}`)
})


console.log("****************** FOREACH  2 ***********************");

function printUsers(user,i){
    console.log(`${user}--- ${i}`)
}

users.forEach(printUsers);

