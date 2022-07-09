console.log("****************** MODULES ***********************");
import Notebooks from "./products.js";
import User from './user.js';

const user1 = new User("Jhone","15264")

console.log(user1.fullName())
console.log(Notebooks())
