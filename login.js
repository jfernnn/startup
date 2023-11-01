function login() {
    const nameOfUser = document.querySelector("#userName");
    const userPassword = document.querySelector("#password");
    localStorage.setItem("userName", nameOfUser.value);
    window.location.href = "profile.html";
}

function register() {
  //const nameOfUser = document.querySelector("#userName");
  //const userPassword = document.querySelector("#password");
  const u = document.querySelector('#regUserName').value;
  const p = document.querySelector('#regPassword').value;
  const f = document.querySelector('#firstName').value;
  const l = document.querySelector('#firstName').value;
  const s = document.querySelector('#schoolName').value;


  const newUser = {
    username : u,
    password : p,
    first_name : f,
    last_name : l,
    school : s
  }
  let users = [];
  const usersText = localStorage.getItem('users');
  if(usersText) {
    users = JSON.parse(usersText);
  }

  let found = false;
 // for(let u of users.entries()) {
 //   if(u.username === newUser.username) {
 //       found = true;
 //   }
 // }

 // if(!found) {
  users.push(newUser);
 // }

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('userName', u);
  window.location.href = "profile.html";
}

function toggleRegister() {
  var reg = document.getElementById("user-register");
  var log = document.getElementById("user-login");

  reg.style.display = 'block';
  log.style.display = 'none';
}