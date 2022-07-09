

console.log("****************** LocalStorage ***********************")


const user = {name:"Jhone",isActive: true,}

localStorage.setItem("userInfo",JSON.stringify(user))

const userInfo = localStorage.getItem("userInfo")

const getUserInfo = JSON.parse(userInfo)
console.log(getUserInfo)


console.log(" ********************** 2 ************************")

const users = [
    {id:1,name:"Jhone",password:"1234567"},
    {id:2,name:"Mary",password:"785468"},
    {id:3,name:"Watson",password:"1234w"},
]

localStorage.setItem("users",JSON.stringify(users))
const usersInfo = localStorage.getItem("users")
const getAllUsers = JSON.parse(usersInfo)



