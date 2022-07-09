export default class User{
    constructor(name,password){
        this.name = name;
        this.password = password;
    }
     fullName = function(){
        return `User info : ${this.name} + ${this.password}`
     }
}