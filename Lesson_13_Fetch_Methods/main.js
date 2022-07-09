console.log("****************** GET POST and ect Methods ***********************");
const form = document.getElementById("form")
const title = document.getElementById("title")
const body = document.getElementById("body")
const id = document.getElementById("id")
let posts = document.getElementById("posts")


const URL = `https://jsonplaceholder.typicode.com/posts`

const limit = 10;



// eventListeners
form.addEventListener("submit",submitHandler)



// handle function
function submitHandler(e){
    e.preventDefault()
    // req & res
    post()
}




// method POST
function post(){
  fetch(`${URL}`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title:title,
      body:body,
      id:id,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  }
  )
  .catch((error) => {
    console.error('Error:', error);
  });
}









