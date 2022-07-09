console.log("****************** FETCH API  ***********************")

// Promises
//  3 states : pending ,fullfield, rejected

// const URL = `https://dummyjson.com/products`;

const allUsers = {
    userList: []
}

const getData = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

getData()


const newFunc = async()=>{
    const response = await getData()
    allUsers.userList = response;
    console.log(allUsers.userList)
}

newFunc()




// ******************************************************

const userAPI = fetch(`https://jsonplaceholder.typicode.com/users`).then(res=>{
                 return res.json()
})
.then(data=>{
    console.log(data)

    // data.map(user=>{
    //     console.log(user.name)
    // })
})

