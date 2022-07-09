console.log("****************** TRY CATCH  ***********************");

const ul = document.querySelector(".ul");

// state
const allUsers = {
  userList: [],
  filter:true,
};

// fetch
const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const jsonData = await res.json();
  return jsonData;
};

getData();



// changed state
const changeState = async () => {
  try {
    const response = await getData();
    allUsers.userList = response;
    renderedUsers();
  } catch (error) {
    document.write(`ERROR : $${error}`)
  }
};

changeState();



// rendered
const renderedUsers = () => {
    allUsers.userList.map((user) => {
        ul.innerHTML += `<li class="ul_li">${user.name}</li>`;
      });
};


