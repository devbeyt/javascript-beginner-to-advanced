console.log("****************** ARRAY ***********************");

const products = ["phone","table","notebok","pc","book",24,true]

const product = products[3]
products[0] = "Chair"
const len = products.length;
const prod = products[products.length - 1]
const changedToString = products.toString()
const between = products.join("---")
products.push("Cup")



console.log(products)
console.log(between)
console.log(typeof(changedToString))
console.log(prod)
console.log(product)
console.log(products[0])



console.log("****************************************")

let notebooks = [
    {id: 1,categoryId:1, name: "Samsung"},
    {id: 2,categoryId:1, name: "tablet"},
    {id: 3,categoryId:2, name: "table"},
    {id: 4,categoryId:3, name: "bycicle"},
    {id: 5,categoryId:1, name: "keyboard"},
  ];

notebooks.map(notebok=>{
    const filtered = notebok.categoryId === 1
    if(filtered){
        console.log(notebok.name)
    }
})


// reducer ()

let prices = [5,10,24,34,7]
let total = prices.reduce(check)
console.log(total)

function check(total,element){
     return total + element;
}

  





