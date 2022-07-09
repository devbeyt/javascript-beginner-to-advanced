console.log("****************** OBJECT ***********************");

const phone = { model: "Iphone", name: "IPHONE S4" };

const user = {
  firstName: "Jhone",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(user.firstName);
console.log(user["lastName"]);
const full = user.fullName();

for (let x in user) {
  console.log(x);
}


console.log("******************************************************")

const user2 = {
  "firstName": "Jhone",
  "lastName": "Doe",
  "age": 30,
};

for(let x in user2){
   console.log(x)
}




