console.log("****************** ORDER Functions ***********************")
import { products } from "./products.js"

const rootDOM = document.getElementById("root")


products.forEach(product=>{
  // rootDOM.innerHTML += `<h2>${product.name}</h2>`
})


const filtered = products.filter(product=>{
      return product.price > 800;
})

filtered.map(item=>{
    rootDOM.innerHTML += `<h2>${item.name}</h2>`
})







