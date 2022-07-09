console.log("****************** Functions ***********************")

//********************** */ 
login("Jhone","12345")

function login(userName,password){
    console.log(`Your info :` + userName + ' : ' + password)
}

// **********************  


function ask(question,yes,no){
    if(confirm(question)){
        yes()
    }else{
        no()
    }
}

 //ask("Do you agree?",showOk,showCancel)

function showOk(){
    alert("You agreed")
}

function showCancel(){
    alert("You canceled..")
}

// **********************



const  test =() => "Hello";

// ************************ 
const hi = () =>{
    return "Hello"
}

hi()
// ********************* 














