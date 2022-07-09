console.log("****************** Promise ***********************");
import { products } from './../Lesson_10_Order_functions/products.js';

// const promise = new Promise((resolve,reject)=>{
//       resolve("products listed")
//       reject("not connect")
// })

// console.log(promise)

// promise
//     .then(data=>{
//       console.log(data)
//     }).catch(error=>{
//       console.log(error)
//     })

function addProduct(product){
  const promise = new Promise((resolve,reject)=>{
    products.push(product)
    resolve(products)
    reject("Error connect")
  })
  
  return promise;
}



// getAll
function getAll(){
  products.map(product=>{
    console.log(product.name)
  })
}


// add Product
addProduct({id:5,name:"Glasess",price:40})
          .then(()=>{
            console.log("product updated")
            getAll()
          }).catch(error=>{
            console.log(error)
          })
