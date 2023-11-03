class Login {
    constructor() {

    }
}

const log = new Login();

function login() {
    const nameOfUser = document.getElementById("userName").value;
    const userPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const searchResults = users.filter(user => user.username.toLowerCase().includes(nameOfUser));

    if(searchResults.length > 0){
        if(searchResults[0].password === userPassword) {
            localStorage.setItem("userName", nameOfUser);
            localStorage.setItem("user",searchResults[0]);
            window.location.href = "profile.html";
        } 
    }

    const invalidEl = document.querySelector('.invalid-login');
    invalidEl.textContent = "User not found";

}

function register() {
  //const nameOfUser = document.querySelector("#userName");
  //const userPassword = document.querySelector("#password");
  const u = document.getElementById("regUserName").value;
  const p = document.getElementById("regPassword").value;
  const f = document.getElementById("firstName").value;
  const l = document.getElementById("firstName").value;
  const s = document.getElementById("schoolName").value;


  const newUser = {
    username : u,
    password : p,
    first_name : f,
    last_name : l,
    school : s
  }
  const users = JSON.parse(localStorage.getItem('users')) || [];

 // if(!found) {
  users.push(newUser);
 // }

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('current-user', JSON.stringify(newUser));
  localStorage.setItem('userName', u);

  /*
  document.getElementById('regUserName').value = "";
  document.getElementById('regPassword').value = "";
  document.getElementById('firstName').value = "";
  document.getElementById('firstName').value = "";
  document.getElementById('schoolName').value = "";
*/
  window.location.href = "profile.html";
}

function toggleRegister() {
  var reg = document.getElementById("user-register");
  var log = document.getElementById("user-login");

  reg.style.display = 'block';
  log.style.display = 'none';
}