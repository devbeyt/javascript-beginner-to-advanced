console.log("****************** CLASES ***********************");

class User{
    constructor(name,password){
      this.name = name;
      this.password = password
    }
}

const user1 = new User("Jhone","12346");
console.log(user1.name)


// class Person{
  
//   name = "Jhone"
//   hello(){
//     console.log(`Hello ${this.name}`)
//   }
// }

// const person1 = new Person()
// console.log(person1.hello())



console.log("*************** INHERITANCE *****************")

class Person{
     constructor(name,surname){
      this.name = name
      this.surname =surname
     }
     fullName(){
      console.log(`${this.name} ${this.surname}`)
     }
}

let person1 = new Person("Jhone","Doe")
person1.fullName()




// extends
class Employee extends Person{
    
}

let employee1 = new Employee("Mary","Smith")
employee1.fullName()







